import { Route, Routes } from "react-router-dom";
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Products from './pages/Products'
import Error from './pages/Error'
import Home from './pages/Home'
import SingleProduct from './pages/SingleProduct'
import SharedLayout from "./component/SharedLayout";
import { useState } from "react";
import ProtectedRoute from "./component/ProtectedRoute";
import SharedProductLayout from './component/SharedProductLayout'

function App() {

  const [user, setUser] = useState(null)

  return <Routes>

    <Route
      path="/"
      element={<SharedLayout />}
    >

      <Route index element={<Home />} />

      <Route
        path="about"
        element={<About />}
      />

      <Route
        path="dashboard"
        element={
          <ProtectedRoute user={user}>
            <Dashboard user={user} />
          </ProtectedRoute>
        }
      />


      <Route
        path="login"
        element={<Login setUser={setUser} />}
      />

      <Route
        path="products"
        element={<SharedProductLayout />}
      >
        <Route index element={<Products />} />

        <Route
          path=":productId"
          element={<SingleProduct />}
        />
        
      </Route>



      <Route
        path="*"
        element={<Error />}
      />
    </Route>

  </Routes>


}

export default App;
