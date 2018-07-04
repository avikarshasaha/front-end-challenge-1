import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart, updateQuantity } from '../actions'
import { Link } from 'react-router-dom';
import { getCartItems } from '../reducers'

const Cart = ({ items, removeFromCart, updateQuantity }) => {
  console.log(items.length);

  const renderQuantityOptions = (quantity) => {
    let options = [];
    for (let i = 1; i <= quantity; i++) {
      options.push(<option value={i}>{i}</option>);
    }
    return options;
  }
  
  const renderItems = () => {
    let total = 0;
    return (
      <div>
        <ul className="cart-items">
          { items.map(item => {
            const source = item.sizes[item.selectedsize].sources[item.selectedsource];
            total += source.discounted_price * item.quantity
            return (
              <li className="cart-item cart-item-0">
                <div className="cart-item-image-link">
                  <img className="cart-item-image" src={item.image} />
                </div>
                <div className="cart-item-info">
                  <h1 className="cart-item-name-link cart-item-name">{item.title} {source.host} </h1>
                  <div className="cart-item-value">
                    <span className="cart-item-price">Size: {item.selectedsize} </span>
                    <span className="cart-item-price">Source: {source.host} </span>
                  </div>
                  <div className="cart-item-value">
                    <span className="cart-item-price">Rs. {source.discounted_price * item.quantity}</span>
                    <span className="cart-item-qty">Qty:
                      <select className="cart-item-qty-select" 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.selectedsize, item.selectedsource, e.target.value - item.quantity)}
                      >
                        {renderQuantityOptions(source.stock + item.quantity)}
                      </select>
                    </span>
                  </div>
                </div>
                <a className="cart-item-delete" onClick={() => removeFromCart(item.selectedsize, item.selectedsource, item.quantity)}>×</a>
              </li>
            )
          })}
        </ul>
        <div>
          <div className="cart-total">
            <span className="cart-total-label">Total:</span>
            <span className="cart-total-value">Rs. {total}</span>
          </div>
          <button type="button" className="cart-pay-button">Pay now</button>
        </div>
      </div>
    )
  }

  const renderNoItem = () => (
    <p class="empty-cart">Cart is empty</p>
  )

  return (
    <div className="cart">
      <h1 className="main-header cart-header">My Cart</h1>
      {items.length > 0 ? renderItems() : renderNoItem() }
    </div>
  )
}

const mapStateToProps = (state) => ({
  items: getCartItems(state),
})

export default connect(
  mapStateToProps, 
  { removeFromCart, updateQuantity }
)(Cart)
