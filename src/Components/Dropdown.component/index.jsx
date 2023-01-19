import React from "react";
import Button from "../Custom-button/button";
import "./cart-dropdown.styles.scss";
import {useSelector} from 'react-redux'
import { useNavigate} from "react-router-dom";


const CartDropdown = () => {
  const navigate = useNavigate();
const cart=useSelector((store)=> store?.cart)
  return (
    <div className="cart-dropdown" >
      <div className="cart-items">
      { cart.cartItems? (
        cart.cartItems.map((item) =>
          <div className="cart">
            <h3>{item.title}</h3>
            <h4>{item.amount}</h4>
            <img src={item.photo} alt=""/>
          </div>
      )): (
        <span className="empty-message">Your cart is empty</span>
      )
      }
      </div>
      <Button onClick={()=> navigate("/upload")}>Go To CHECKOUT</Button>
    </div>
  );
};
export default CartDropdown;

