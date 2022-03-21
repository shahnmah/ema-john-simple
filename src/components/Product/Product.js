import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name, seller, price, ratings, img} = props.product;
    return (
        <div className='product'>
            <img src={img} alt={name}></img>
            <h6 className='product-name'>{name}</h6>
        </div>
    );
};

export default Product;