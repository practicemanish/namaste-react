
import { useEffect, useState } from "react";
import logo from "../burger.png";
import { Link } from "react-router-dom";

const Header = () => {

  useEffect(() => {

    console.log("useEffect called");
  })
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="Order Food" width="100px" />
      </div>
      <div className="nav-items">  
        <ul>
          <li>
           Home
            </li>
          <li>
           <Link to="/About">About us</Link> 
            </li>
          <li>
            <Link to="/contact">Contact us </Link>
            </li>
          <li>Cart</li>
          <button className="login" onClick={() => {
            btnName ==="login"
            ? setbtnName("logout"): setbtnName("login");
              console.log("btn is clicked");

          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;