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
      inventoryList: []
    }
  }


  componentDidMount(){
    axios.get('/api/inventory').then ((response) => {
      console.log(response)
      this.setState({
        inventoryList: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Dashboard
        inventoryList={this.state.inventoryList}
      />

      <Form />

      </div>
    );
  }
}

export default App;
