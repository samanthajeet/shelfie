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
      isEditing: false
    }

    this.componentDidMount = this.componentDidMount.bind(this);
    this.isEditing = this.isEditing.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }


  componentDidMount(){
    axios.get('/api/inventory').then ((response) => {
      console.log(response)
      this.setState({
        inventoryList: response.data
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


  isEditing(){
    console.log('edit')
    this.setState({
      isEditing: true
    })
  }


  render() {
    return (
      <div className="App">
      <Header />
      <Dashboard
        inventoryList={this.state.inventoryList}
        isEditingFn={this.isEditing}
        deleteProduct={this.deleteProduct}
      />

      <Form
        get={this.componentDidMount} 
        isEditing={this.state.isEditing}
        isEditingFn={this.isEditing}

      />

      </div>
    );
  }
}

export default App;
