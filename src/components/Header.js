
import { useEffect, useState } from "react";
import logo from "../burger.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  useEffect(() => {

    console.log("useEffect called");
  })
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 ">
      <div className="logo-container">
        <img src={logo} alt="Order Food" width="100px" />
      </div>
      <div className="flex items-center">  
        <ul className="flex p-4 m-4 space-x-3">
          <li>
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
           <Link to ="/">Home</Link>
            </li>
          <li>
           <Link to="/About">About us</Link> 
            </li>
          <li>
            <Link to="/contact">Contact us </Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
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