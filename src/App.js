import React, { Component } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inventoryList: [
        {
          name: 'puppy',
          price: 400,
          image: 'https://tinyurl.com/y6maqb3j'
        },
        {
          name: 'https://tinyurl.com/y6maqb3j' ,
          price: 200,
          image: 'https://tinyurl.com/y4whfq3w'
        }
      ]
    }
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
