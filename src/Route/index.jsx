import React from 'react'
import { Route, Routes} from "react-router-dom";
// import CartItem from '../Components/Item.Category/index';
import CartegoryPage from '../Pages/cartegory-page/Cartegory-page';
import CheckoutPage from '../Pages/checkout-page';
// import Checkout from '../Pages/checkout-page';

const App = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element={<CartegoryPage/>} />
            {/* <Route path="/drop" element={<CartItem/>}/> */}
            <Route path="/upload" element={<CheckoutPage/>} />
        </Routes>
    </div>
  )
}

export default App;

