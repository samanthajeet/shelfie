import React from 'react';

export default function Product(props){
    return (
      <div style={{ "margin": "10%"}}>
        <div  >

        <h1> {props.product.name}</h1>
        <h3> ${props.product.price} </h3>
        <img style={{"width": "40%"}} src={props.product.img_url} alt={props.product.name} />
        </div>
        
        <button onClick={ () => props.isEditingFn(props.product.product_id, props.product.name, props.product.price, props.product.img_url) }>Edit</button>
        <button onClick={ () => props.deleteProduct(props.product.product_id)}>Delete</button>
      </div>
    );
}