import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, seller, price, ratings, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt={name}></img>
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;