import React, {Component} from 'react';
import Product from '../Product/Product';


class Dashboard extends Component {



  render() { 
    const { inventoryList } = this.props
    const productDisplay = inventoryList.map( (product,i) => {
      return (
        <Product
          key={i}
          product={product}
          isEditingFn={this.props.isEditingFn}
          deleteProduct={this.props.deleteProduct}
          updateState={this.updateState}
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