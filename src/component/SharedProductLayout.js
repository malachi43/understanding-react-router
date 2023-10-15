import { Link, Outlet } from "react-router-dom";
import data from '../data'

const Products = () => {
    return (
        <>
            <section className='section'>
                <h2>products</h2>
                <div className="products">
                    <Outlet />
                </div>


            </section>
        </>
    );
};

export default Products;