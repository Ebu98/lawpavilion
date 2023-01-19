import React from "react";
import Button from "../Custom-button/button";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./cart.style.scss";

const AddCart = (item) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log(item);
    dispatch(addItem(item));
  };
  const { photo, title, amount } = item;
  return (
    <div className="container">
      <div className="add-cart-container">
        <img src={photo} alt="" />
        <h4>{title}</h4>
        <p>{amount}</p>
      </div>
      <Button
        onClick={() => {
          addToCart();
        }}
      >
        AddCart
      </Button>
    </div>
  );
};

export default AddCart;
