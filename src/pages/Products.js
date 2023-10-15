import { Link } from "react-router-dom";
import data from '../data'

const Products = () => {
  return (
    <>
      <section className='section'>
        <div className="products">


          {data.map(({ id, name }) => {
            return <article key={id} className="products">
              <h5>{name}</h5>
              <Link to={`/products/${id}`}> more details</Link>
            </article>
          })}
        </div>


      </section>
    </>
  );
};

export default Products;
