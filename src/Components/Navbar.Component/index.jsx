import React, { useState } from "react";
import "./nav.style.scss";
import CartDropdown from "../Dropdown.component";
import CartIcon from "../CartIcon/cartIcon.component";

const Navbar = () => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow((prevShow) => !prevShow);
  };
  return (
    <div className="page-header">
      <div className="right-container">
        <h2>Woman</h2>
        <h2>Man</h2>
        <h2>Kids</h2>
      </div>
      <div className="left-container">
        <h2>
          ${" "}
          <select>
            <option value="volvo">$ USD</option>
            <option value="saab">€ EUR</option>
            <option value="opel">¥ JPY</option>
            <option value="audi"># NGN</option>
          </select>
        </h2>
        <div className="notificaton-btn" onClick={handleClick}>
          <CartIcon />
        </div>
      </div>
      {show ? null : <CartDropdown />}
    </div>
  );
};

export default Navbar;
