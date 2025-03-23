import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';            //used for taking the product id 
import { items } from './Data';
import Product from './Product';

const ProductDetails = ({cart,setCart}) => {
  const {id}=useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts,setRelatedProduct]=useState([]);
 
  useEffect(() => {
    const filterProduct=items.filter((product)=>product.id == id)
    // console.log(filterProduct)
    setProduct(filterProduct[0])                  //filter writtens array

    const relatedProducts=items.filter((p)=>p.category === product.category)
    // console.log("related category =", relatedProducts)
    setRelatedProduct(relatedProducts)
  },[id,product.category]);

  return (
    // <div> Product details--{id}</div>
    <>
    <div className="container con">
      <div className="img">
        <img src={product.imgSrc} alt='' />
      </div>
        <div className='text-center'>
              <h1 className="card-title">{product.title}</h1>
              <p className="card-text">{product.description}</p>
              <button className='btn btn-primary mx-3'>{product.price}{""} ₹</button>
              <button className='btn btn-warning'>Add to cart</button>
        </div>
    </div>
    <Product cart={cart} setCart={setCart} items={relatedProducts} />
    </>
  );
}

export default ProductDetails;
