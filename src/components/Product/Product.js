import React from 'react';

export default function Product(props){
    return (
      <div>
        <h1> {props.product.name}</h1>
        <h2> ${props.product.price} </h2>
        <img src={props.product.img_url} alt={props.product.name} />

        <button onClick={ () => props.isEditingFn() }>Edit</button>
        <button onClick={ () => props.deleteProduct(props.product.product_id)}>Delete</button>
      </div>
    );
}