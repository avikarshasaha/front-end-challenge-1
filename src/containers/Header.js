import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <header className="header">
      <div className="header-contents">
        <Link to="/" className="back-button">
          Home
        </Link>

        <Link to="/cart" className="cart-button">
          Cart ({cartItems})
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  cartItems: Object.keys(state.cart.items).length,
});

export default connect(
  mapStateToProps,
)(Header);
