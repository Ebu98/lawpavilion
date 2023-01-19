import React from "react";

import { addItem } from "../../redux/cart/cart.actions";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import "./checkOut.scss";

const Checkout = (item) => {
  console.log("item", item);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(item));
  };
  const removeItem = () => {
    dispatch(removeItem(item));
  };
  const clearItem = () => {
    dispatch(clearItemFromCart(item));
  };
  const {
    cartItem: { photo, title, amount },
  } = item;
  return (
    <>
      <div className="checkout-item">
        <span className="name">{title}</span>
        <span className="name">{amount}</span>
        <div className="image-container">
          <img src={photo} alt="item" />
        </div>
        <span className="quantity">
          
          <div
            className="arrow"
            onClick={() => {
              removeItem();
            }}
          >
            +
          </div>
          <span className="value">1</span>
          <div
            className="arrow"
            onClick={() => {
              addToCart();
            }}
          >
            -
          </div>
        </span>
        {/* <span className="price">{price}</span> */}
        <div className="remove-button" onClick={() => clearItem()}>
          &#10005;
        </div>
      </div>
    </>
  );
};

export default Checkout;
