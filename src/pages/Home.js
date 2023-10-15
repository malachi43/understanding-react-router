import { Outlet } from "react-router-dom";
import { Navbar } from "../component/Navbar";

const Home = () => {
  return (
    <section className='section' style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '90vh',
      width: '100vw',
      background: 'whitesmoke',
      padding: '10px',
      borderRadius: '25px',
      position: 'relative'
    }}>

      <div style={{
        display: 'flex',
        margin: '10px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}>

        <h2>HOME PAGE</h2>
        <small style={{
          fontFamily: 'cursive'
        }}>Where we demystify your tech-related problems for you</small>
      </div>
    </section>
  );
};
export default Home;
