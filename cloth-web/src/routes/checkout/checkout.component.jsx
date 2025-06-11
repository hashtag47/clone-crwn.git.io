import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Cross from "../../assets/cross.png";
import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";

const Checkout = () => {
  const { cartItems, removeItemFromCart } = useContext(CartContext);

  return (
    <div>
      <span>Product</span>
      <span>Description</span>
      <span>Quantity</span>
      <span>Price</span>
      <span>Remove</span>

      <ul>
        {cartItems.map((cartItem) => (
          <li key={cartItem.id}>
            <hr />
            <img src={cartItem.imageUrl} />
            <span>{cartItem.name}</span>
            <span>
              <button>
                <img src={LeftArrow} alt="left arrow" />
              </button>
              {cartItem.quantity}
              <button>
                <img src={RightArrow} alt="right arrow" />
              </button>
            </span>
            <span>{cartItem.price}</span>
            <button onClick={() => removeItemFromCart(cartItem)}>
              <img src={Cross} alt="cross" />
            </button>
          </li>
        ))}
      </ul>
      <div>TOTAL:$0</div>
    </div>
  );
};

export default Checkout;
