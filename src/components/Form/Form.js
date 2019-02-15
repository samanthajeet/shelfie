import React, { Component } from 'react';


class Form extends Component {
  constructor(){
    super();
    this.state ={
      imgUrl: '',
      productName: '',
      price: 0
    }
  }

  handleImage(value){
    this.setState({
      imgUrl : value
    })  }
  
  handleProductName(value){
    this.setState ({
      productName: value
    })
  }
  
  handlePrice(value) {
    this.setState ({
      price: value
    })
  }

  onCancel(){
    this.setState({
      imgUrl: '',
      productName: '',
      price: 0
    })
  }



  render() { 

    return ( 
      <div>
        <h1>Form</h1>

        <input 
          type="text"
          placeholder="Image URL" 
          onChange={(e) => this.handleImage(e.target.value)}
          value={this.state.imgUrl}
        />

        <input
          placeholder="Product Name"
          onChange={(e) => this.handleProductName(e.target.value)}
          value={this.state.productName}
        />

        <input
          placeholder="Price"
          onChange={(e) => this.handlePrice(e.target.value)}
          value={this.state.price}
        />
        
        <button onClick={ () => this.onCancel() }>Cancel</button>
        <button>Add to Inventory</button>
        
      </div>
     );
  }
}
 
export default Form;