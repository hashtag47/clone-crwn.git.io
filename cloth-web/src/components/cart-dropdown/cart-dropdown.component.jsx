import React from "react";

import Button from "../../components/button/button.component";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="inverted">GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
