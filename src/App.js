import React, { useEffect, useState } from "react";
import "./App.css";
import DarkThemeToggle from "./DarkThemeToggle";
import Header from "./components/Header";
// import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";



// not using keys (not acceptable) <<<<index as key <<<<<<<< unique id (best practices)


const AppLayout = () => {

  const [userName , setUserName] = useState();

  //Authentication 
  useEffect(()=>{
    //make an api call and send userName and password
    const data = {
      name:"Manish yadav",
    };
    setUserName(data?.name);
  },[]);


  return (
    <div className="app"> 
    <UserContext.Provider value={{loggedInUser:userName}}>
      <Header /> 
    </UserContext.Provider>
      
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <HeadingComponent />
              <Title/> */}
      <AppLayout />
      <DarkThemeToggle />
    </div>
  );
};

export default App;



