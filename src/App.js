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
          name: 'nunchuck' ,
          price: 200,
          image: 'https://images-na.ssl-images-amazon.com/images/I/61sGOP4veiL._SY355_.jpg'
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
