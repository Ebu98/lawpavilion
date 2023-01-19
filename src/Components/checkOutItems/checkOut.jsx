import React from "react";

import { addItem } from "../../redux/cart/cart.actions";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
// import "./checkout.scss"

const Checkout = (item) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log(item);
    dispatch(addItem(item));
  };
  const removeItem = () => {
    dispatch(removeItem(item));
  };
  const clearItem = () => {
    dispatch(clearItemFromCart(item));
  };
  const { photo, title, amount } = item;
  return (
    <>
      
      <div className="checkout-item">
        <span className="name">{title}</span>
        <span className="name">{amount}</span>
        <div className="image-container">
          <img src={photo} alt="item" />
        </div>

        {/* <div>
          {item ? (
            item.map((value) => (
              <div>
                <span className="name">{value.title}</span>
                <span className="name">{value.amount}</span>
                <div className="image-container">
                  <img src={value.photo} alt="item" />
                </div>
              </div>
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div> */}

        <span className="quantity">
          <div
            className="arrow"
            onClick={() => {
              removeItem();
            }}
          >
            &#10094;
          </div>
          {/* <span className="value">{quantity}</span> */}
          <div
            className="arrow"
            onClick={() => {
                addToCart();
            }}
          >
            &#10095;
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
