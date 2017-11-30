import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import CartPage from "./Components/CartPage";
import ItemPage from "./Components/ItemPage";
import items from "./data";

class App extends React.Component {
  state = {
    itemPageActive: true,
    cartPageActive: false,
    activePage: "items",
    subtotal: 0,
    itemCount: 0,
    cartItems: []
  };
  addToCart = item => {
    let updatedCart = [...this.state.cartItems, item];
    this.setState({
      subtotal: this.state.subtotal + item.price,
      itemCount: updatedCart.length,
      cartItems: updatedCart
    });
  };
  renderPage = activePage => {
    let itemsPageActive = activePage === "items";
    this.setState({
      activePage: activePage,
      itemPageActive: itemsPageActive,
      cartPageActive: !itemsPageActive
    });
  };

  render() {
    let activePage = this.state.itemPageActive ? (
      <ItemPage
        addToCart={this.addToCart}
        items={items}
        active={this.state.itemPageActive}
      />
    ) : (
      <CartPage
        items={this.state.cartItems}
        active={this.state.cartPageActive}
      />
    );
    return (
      <div className="App">
        <Nav newState={this.state} activeEvent={this.renderPage} />
        {activePage}
      </div>
    );
  }
}

export default App;
