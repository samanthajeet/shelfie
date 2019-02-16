import React, { Component } from 'react';
import axios from 'axios';


class Form extends Component {
  constructor(){
    super();
    this.state ={
      img_url: '',
      name: '',
      price: 0,
      id:0,
      isEditing: false
    }
  }

  componentDidUpdate(prevProps){
    if (this.props.isEditing !== prevProps.isEditing) {
      console.log(333)
      this.setState({
        img_url: this.props.editingImgUrl,
        name: this.props.editingName,
        price: this.props.editingPrice,
        id: this.props.editingId.editing,
        isEditing: true
      })
      return '444'
    }
    console.log(this.state)
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
      price: 0,
      isEditing: false
    })

  }

  saveChanges() {
    console.log('wassup')
    this.props.updateProduct(this.state.id, this.state.name, this.state.price, this.state.img_url )
    this.setState({
      img_url: '',
      name: '',
      price: 0,
    })
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
          <button onClick={ () => this.saveChanges() } >Save Changes</button>
        ) : (
          <button onClick={ () => this.createProduct()}>Add to Inventory</button>
        )}
        
      </div>
     );
  }
}
 
export default Form;