import React, {Component} from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {

  state = {  }
  render() { 
    let productDisplay = this.props.inventoryList.map( (product,i) => {
      return (
        <Product
          key={i}
          product={product.name}
        />

      )
    })
    return (
      <div>
        <h1>Dashboard</h1>
        
        {productDisplay}
      </div>
     );
  }
}
 
export default Dashboard;