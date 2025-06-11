import React from "react";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../../components/button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { Link } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);

  const handleBtnClick = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Link to="/checkout">
        <Button buttonType="inverted" onClick={handleBtnClick}>
          GO TO CHECKOUT
        </Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
