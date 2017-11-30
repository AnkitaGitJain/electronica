import React from "react";
import Product from "./Product";

class CartPage extends React.Component {
  render() {
    let productList = this.props.items.map(item => {
      return (
        <div className="product-wrapper">
          <div className="product-left">
            <Product item={item} />
          </div>
          <div className="product-right">
            <p>${item.price}</p>
          </div>
        </div>
      );
    });

    return <div>{productList}</div>;
  }
}
export default CartPage;
