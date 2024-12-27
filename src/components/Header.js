import { useState } from "react";
import image from "../pictures/applogo.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={image} />
      </div>
      <div className="nav-items">
        <nav>
          <ul>
          <li>onlineStatus:{onlineStatus ? "online" : "offline"}
          </li>
            <li>
              
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
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
