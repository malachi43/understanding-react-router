import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import data from '../data'

const SingleProduct = () => {
  const [products, setProducts] = useState(data)
  const { productId } = useParams()

  const { name, image } = products.find(item => item.id === productId)

  return (
    <section className='section product'>
      {/* <img src={image} alt={name} /> */}

      <h5>{name} (id:{productId})</h5>
      <nav className="navbar">

        <Link to="/products">Back to products</Link>
      </nav>

    </section>
  );
};

export default SingleProduct;
