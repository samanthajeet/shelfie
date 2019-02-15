import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
  constructor(){
    super();
    this.state ={
      img_url: '',
      name: '',
      price: 0,
    }
  }

  handleImage(value){
    this.setState({
      img_url : value
    })  }
  
  handleProductName(value){
    this.setState ({
      name: value
    })
  }
  
  handlePrice(value) {
    this.setState ({
      price: value
    })
  }

  onCancel(){
    this.setState({
      img_url: '',
      name: '',
      price: 0
    })
  }




  createProduct(){
    const {name, price, img_url} = this.state;
    axios.post('/api/product', {name:name, price: price, img_url: img_url}).then( (res) => {
      this.props.get()
    })

  }

  saveEdit(){
    this.props.isEditingFn()
  }


  render() { 

    return ( 
      <div>
        <h1>Form</h1>

        <input 
          type="text"
          placeholder="Image URL" 
          onChange={(e) => this.handleImage(e.target.value)}
          value={this.state.img_url}
        />

        <input
          placeholder="Product Name"
          onChange={(e) => this.handleProductName(e.target.value)}
          value={this.state.name}
        />

        <input
          placeholder="Price"
          onChange={(e) => this.handlePrice(e.target.value)}
          value={this.state.price}
        />
        
        <button onClick={ () => this.onCancel() }>Cancel</button>

        {this.props.isEditing ? (
          <button onClick={ () => this.saveEdit()} >Save Changes</button>
        ) : (
          <button onClick={ () => this.createProduct()}>Add to Inventory</button>
        )}
        
      </div>
     );
  }
}
 
export default Form;