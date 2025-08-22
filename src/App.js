import React from "react";
import "./App.css";
import DarkThemeToggle from "./DarkThemeToggle";
import Header from "./components/Header";
import Body from "./components/Body";



// not using keys (not acceptable) <<<<index as key <<<<<<<< unique id (best practices)


const AppLayout = () => {
  return (
    <div className="app">
      <Header /> 
      <Body />
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



