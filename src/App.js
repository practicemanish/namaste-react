import React from 'react';
// import ReactDOM from "react-dom/client"
import './App.css';
import burger from "./burger.png";
import DarkThemeToggle from "./DarkThemeToggle";


/**
 * Header
 * -logo 
 * -Nav items
 * -About
 * BODY
 * -Search
 * -RestaurantContainer
 * Restaurant cart
 * -img
 * -name of restaurant
 * -star rating , cuisine,delivery time
 * FOOTER
 * -Copyright
 * links
 * address
 * contact
 * 
 * 
 * 
 * 
 */
const RestaurantCard =()=>{
  return(
    <div className='res-card'>
       <img alt='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898"></img>
      <h3>Shivam Restaurant</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h3>33min</h3>
     

    </div>
  )
}

const Header = () => {
  return (
    <div className="header">
      <div className='logo-container'>  
         <img src={burger} alt="Order Food" width="100px" />
      </div>
      <div className="nav-items">

        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = ()=>{
  return(
    <div className='body'>
      <div className='Search'>Search</div>
      <div className='res-container'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        
      </div>

    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
     

    </div>
  );
};

// const elem = <span>React Element</span>

// const Title = () => {
//   return <h1 className="manu">Hey this is Title component</h1>;
// };
// // const data = api.getData();

// // }
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

function App () {
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
