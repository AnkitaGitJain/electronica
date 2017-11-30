import React from "react";
import Product from "./Product";

class ItemPage extends React.Component {
  state = {};
  addToCart = item => {
    this.props.addToCart(item);
  };

  render() {
    let productList = this.props.items.items.map(item => {
      return (
        <div className="product-wrapper">
          <div className="product-left">
            <Product item={item} />
          </div>
          <div className="product-right">
            <p>${item.price}</p>
            <button type="button" onClick={() => this.addToCart(item)}>
              Add to cart
            </button>
          </div>
        </div>
      );
    });

    return <div>{productList}</div>;
  }
}
export default ItemPage;
