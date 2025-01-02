import { useState , useContext } from "react";
import image from "../pictures/applogo.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {loggedInUser} = useContext(userContext);

  const onlineStatus = useOnlineStatus();

  // subscribing to the cart to store the data using a selector
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems)

  return (
    <div className="header flex justify-between bg-yellow-300">
      <div className="logo-container">
        <img className="logo w-28" src={image} />
      </div>
      <div className="nav-items">
        <nav>
          <ul className="flex">
          <li className="p-4 m-4 text-xl">onlineStatus:{onlineStatus ? "online" : "offline"}
          </li>
            <li className="p-4 m-4 text-xl">
              
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 m-4 text-xl">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 m-4 text-xl">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="p-4 m-4 font-bold text-lg"><Link to = '/cart' >Cart - ({cartItems.length} items)</Link></li>
            <button
              className="login-btn m-4 text-xl"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
                console.log(btnName);
              }}
            >
              {btnName}
            </button>
            <li className="p-4 m-4 text-xl">{loggedInUser}</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
