import React from "react";
import {useSelector} from 'react-redux'
import Checkout from "../../Components/checkOutItems/checkOut";
import Navbar from "../../Components/Navbar.Component";
import './checkout.scss';


const CheckoutPage = () => {
const cart=useSelector((store)=> store?.cart)
console.log('cart', cart)

  return (
      <>
      <Navbar />
      <div className="content-wrapper">
    <div className='checkout-page' >
    <div className='checkout-header'>
      <div className='header-block'>
      <span>Carts</span>
      </div>
      </div>
      { cart?.cartItems?.length ? (
        cart.cartItems.map((cartItem) =>
        <Checkout key={cartItem.id} cartItem={cartItem}/>
        )) :(
            <p>Empty</p>
        )
      }
      </div>
      </div>
    </>
  );
};
export default CheckoutPage;

