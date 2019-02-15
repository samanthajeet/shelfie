import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: [],
      isEditing: false,
      editingID: 0
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.isEditing = this.isEditing.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
  }


  componentDidMount(){
    axios.get('/api/inventory').then ((response) => {
      console.log(response)
      this.setState({
        inventoryList: response.data,
        editingID: '',
        editingName: '',
        editingPrice: 0,
        editingImgUrl: ''
      })
    })
  }

  deleteProduct(id){
    console.log('delete')
    axios.delete(`/api/product/${id}`).then( (res) => {
      this.setState({
        inventoryList: res.data
      })
    })
  }


  updateProduct(id,name,price,img_url) {
    axios.put(`/api/product/${id}`, {name: name, price: price, img_url: img_url}).then( (res) => {
      this.setState({
        inventoryList: res.data,
        isEditing: false
      })
    })
  }


  isEditing(id,name,price,img_url){
    console.log(1111, 'now editing', id, name, price, img_url)
    this.setState({
      isEditing: true,
      editingID: id,
      editingName: name,
      editingPrice: price,
      editingImgUrl: img_url
    })
  }






  render() {
    let {editingID, editingName, editingPrice, editingImgUrl} = this.state

    
    return (
      <div className="App">
      <Header />
      <Form
        get={this.componentDidMount} 
        isEditing={this.state.isEditing}
        isEditingFn={this.isEditing}
        updateProduct={this.updateProduct}
        editingId={editingID}
        editingName={editingName}
        editingPrice={editingPrice}
        editingImgUrl={editingImgUrl}
        
        />
      <Dashboard
        inventoryList={this.state.inventoryList}
        isEditingFn={this.isEditing}
        deleteProduct={this.deleteProduct}
        />


      </div>
    );
  }
}

export default App;
