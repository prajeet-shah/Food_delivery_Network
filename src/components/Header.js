import { useState } from "react";
import image from "../pictures/applogo.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} />
      </div>
      <div className="nav-items">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
