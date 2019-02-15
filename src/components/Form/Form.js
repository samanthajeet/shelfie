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

  componentDidMount(){
    console.log(this.props.isEditing)
    console.log(this.props.editingImgUrl)
    if (this.props.isEditing === true) {
      this.setState({
        img_url: this.props.editingImgUrl,
        name: this.props.editingName,
        price: this.editingPrice,
      })
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
    this.setState({
      img_url: '',
      name: '',
      price: 0
    })

  }

  saveChanges(){
    this.props.updateProduct()
  }




  render() { 
    

    return ( 
      <div>
        <h1>Form</h1>

        <div>
        <img style={{"width": "25%"}} src={this.state.img_url} />

        </div>


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
          <button onClick={ () => this.saveChanges(this.state.img_url, this.state.name, this.state.price)} >Save Changes</button>
        ) : (
          <button onClick={ () => this.createProduct()}>Add to Inventory</button>
        )}
        
      </div>
     );
  }
}
 
export default Form;