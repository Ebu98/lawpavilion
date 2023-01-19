import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useDispatch } from "react-redux";
import "./cart-Icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-icon" >
      <ShoppingIcon className="shopping-icon" onClick={toggleCart}/>
    </div>
  );
};

export default CartIcon;
