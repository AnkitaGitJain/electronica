import React from "react";
import "../App.css";

class Nav extends React.Component {
  activatePage = event => {
    this.props.activeEvent(event.target.id);
  };
  render() {
    return (
      <div className="tab-wrapper">
        <span>
          <ul className="tab-element">
            <li id="items" onClick={this.activatePage}>
              Items
            </li>
            <li id="cart" onClick={this.activatePage}>
              Cart
            </li>
          </ul>
        </span>
        <span className="total-wrapper">
          <span>
            subtotal: ${this.props.newState.subtotal} ({
              this.props.newState.itemCount
            }{" "}
            items)
          </span>
        </span>
      </div>
    );
  }
}
export default Nav;
