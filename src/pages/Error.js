import { Link } from "react-router-dom";


const Error = () => {
  return (
    <section className='section'>
      <h2 style={{
        fontFamily: 'cursive', fontSize: '2.5rem', textAlign: 'center'
      }}>Error</h2>
      <p style={{
        fontFamily: 'cursive', fontSize: '2.5rem', textAlign: 'center'
      }}>404 PAGE NOT FOUND</p>
      
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'
      }}>

        <Link to="/" className="btn" style={{
          fontFamily: 'cursive', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%'
        }} >Back Home</Link>
      </div>

    </section>
  );
};
export default Error;
