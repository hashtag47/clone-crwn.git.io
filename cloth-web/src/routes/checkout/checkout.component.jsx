import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

// import Cross from "../../assets/cross.png";
import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">TOTAL: ${cartTotal}</span>
      {/* initial self-made version:
         <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            <hr />
            <img src={cartItem.imageUrl} />
            <span>{cartItem.name}</span>
            <span>
              <button onClick={() => changeQuantityFromCart(cartItem, -1)}>
                <img src={LeftArrow} alt="left arrow" />
              </button>
              {cartItem.quantity}
              <button onClick={() => changeQuantityFromCart(cartItem, 1)}>
                <img src={RightArrow} alt="right arrow" />
              </button>
            </span>
            <span>{cartItem.price}</span>
            <button onClick={() => removeItemFromCart(cartItem)}>
              <img src={Cross} alt="cross" />
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Checkout;
