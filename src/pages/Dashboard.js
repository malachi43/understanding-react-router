import { Link } from "react-router-dom";

const Dashboard = ({ user: {name, email} }) => {

  return (
    <section className='section'>
      <h4>Dashboard</h4>
      <h4>{`Welcome, ${name} - ${email}`}</h4>
      <Link to="/" className="btn">Back Home</Link>
    </section>
  );
};
export default Dashboard;
