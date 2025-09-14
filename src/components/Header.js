
import { useEffect, useState,useContext } from "react";
import logo from "../burger.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  useEffect(() => {

    console.log("useEffect called");
  })
  // let btnName = "Login";
  const [btnName, setbtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);



  return (
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 ">
      <div className="logo-container">
        <img src={logo} alt="Order Food" width="100px" />
      </div>
      <div className="flex items-center">  
        <ul className="flex items-center space-x-5">
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
            <li >
              <Link to="/grocery">Grocery</Link>
            </li>
             <li className="px-4 font-bold text-xl" >
              <Link to="/cart"> Cart- ({cartItems.length} items)</Link>
            </li>
          <li className="font-bold">{loggedInUser}</li>
          <li>
          <button className="px-6 py-2 rounded-lg font-semibold shadow-md transition-colors 
             bg-blue-600 text-white hover:bg-blue-700 active:scale-95" onClick={() => {
            btnName ==="login"
            ? setbtnName("logout"): setbtnName("login");
              console.log("btn is clicked");

          }}>{btnName}</button> </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;