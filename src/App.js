import React from "react";
import "./App.css";
import DarkThemeToggle from "./DarkThemeToggle";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";



// not using keys (not acceptable) <<<<index as key <<<<<<<< unique id (best practices)


const AppLayout = () => {
  return (
    <div className="app">
      <Header /> 
      <Body />
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



