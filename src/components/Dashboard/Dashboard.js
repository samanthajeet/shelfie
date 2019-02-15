import React, {Component} from 'react';
import Product from '../Product/Product'


class Dashboard extends Component {

  state = {  }
  render() { 
    const { inventoryList } = this.props
    const productDisplay = inventoryList.map( (product,i) => {
      return (
        <Product
          key={i}
          product={product}
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