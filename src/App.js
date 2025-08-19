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
}
export default App;



// const elem = <span>React Element</span>

// const Title = () => {
//   return <h1 className="manu">Hey this is Title component</h1>;
// };

// const num =10000;
// function HeadingComponent() {
//   return(
//   <div id="container">

//     <h2>{num}</h2>
//     {/* {Title()} */}
//     {elem}

//   <h1 className="head">Namaste React by Manish</h1>
//   <Title/>
//   </div>
//   )}


