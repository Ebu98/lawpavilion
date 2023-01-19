import React from "react";
import AddCart from "../../Components/Cart.Component";
import Image from "../../assets/image/black.svg";
import Bag from "../../assets/image/bag.svg";
import Woman from "../../assets/image/woman.svg";
import Girl from "../../assets/image/girl.svg";
import Images from "../../assets/image/black.svg";
import Womans from "../../assets/image/woman.svg";
import "./cartegory.style.scss";
import Navbar from "../../Components/Navbar.Component";

const CartegoryPage = () => {
  
  return (
    <>
      <Navbar />
      <div className="container">
      <h3 className="heading">Category name</h3>
      <div className="cartegory-wrapper">
        <AddCart 
           photo={Image}
           title="Apollo Running Short"
           amount="$50.00"
          />
        <AddCart 
             photo={Bag}
             title="Apollo Running Short" 
             amount="$50.00" 
            />
        <AddCart  
             photo={Woman} 
             title="Apollo Running Short" 
             amount="$50.00" 
            />
        <AddCart 
             photo={Girl} 
             title="Apollo Running Short" 
             amount="$50.00" 
            />
        <AddCart 
               photo={Images} 
               title="Apollo Running Short" 
               amount="$50.00" />
        <AddCart
             photo={Womans} 
             title="Apollo Running Short" 
             amount="$50.00" 
        />
      </div>
      </div>
    </>
  );
};

export default CartegoryPage;
