import React from "react";
import {useSelector} from 'react-redux'
import Checkout from "../../Components/checkOutItems/checkOut";
import Navbar from "../../Components/Navbar.Component";
import './checkout.scss';


const CheckoutPage = () => {
const cart=useSelector((store)=> store?.cart)
console.log(cart)

  return (
      <>
      <Navbar />
    <div className='checkout-page' >
      { cart.cartItems? (
        cart.cartItems.map((item) =>
        <Checkout key={item.id} item={item}/>
        )) :(
            <p>Empty</p>
        )
      }
      </div>
    </>
  );
};
export default CheckoutPage;

