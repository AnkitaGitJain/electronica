import React from 'react'
import './CartPage.css'
import Item from '../components/Item'

function CartPage({ items }) {
  return items ? (
    <ul className="CartPage-items">
      {items.map(item => (
        <li key={item.id} className="CartPage-item">
          <Item item={item}>
            <div className="CartItem-controls">
              <button className="CartItem-removeOne">&ndash;</button>
              <span className="CartItem-count">{item.count}</span>
              <button className="CartItem-addOne">+</button>
            </div>
          </Item>
        </li>
      ))}
    </ul>
  ) : (
    <p>Your shopping cart is empty</p>
  )
}

export default CartPage
