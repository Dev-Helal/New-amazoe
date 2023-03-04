import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {img,name,seller,ratings,price} = product;
    return (
        <div className='product-card-container'>
            <div className="card">
                <img src={img} alt="" />
                <div className='product-info'>
                    <h3>Name : {name}</h3>
                    <p>Price : ${price}</p>
                    <span>Manufacturer : {seller}</span>
                    <br></br>
                    <span>Rating : {ratings}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                    <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p>
                </button>
            </div>
        </div>
    );
};

export default Product;