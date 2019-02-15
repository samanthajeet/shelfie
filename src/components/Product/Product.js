import React from 'react';

export default function Product(props){
  return(
    <div>
      <h1>{this.props.name}</h1>
      <h3>{this.props.price}</h3>
      <img src={this.props.image} />

    </div>
  )
}