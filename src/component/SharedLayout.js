import { Navbar } from "../component/Navbar";
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
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
                <Navbar />
            </div>

            {/*  all nested route are shown here*/}
            <Outlet />
            <p
                style={{ position: 'absolute', bottom: '0', right: '0', left: '0', textAlign: 'center' }}>&copy; <b style={{ fontFamily: 'cursive' }} >Uko, Chibuike Malachi</b></p>
        </section>
    );
};
export default SharedLayout;
