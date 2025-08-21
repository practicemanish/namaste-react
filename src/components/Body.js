
import RestaurantCard from "./RestaurantCard.js"
// import resList from "../utils/mockData.js";
import { useState } from "react";
import resList from "../utils/mockData.js";



const Body = () => {
//local state variable
const [listofRestaurant, setlistofRestaurant] = useState(resList);

// or we can also write it 
  // const arr = useState(reslist)
  // const [listOfRestaurant, setlistOfRestaurant] = arr;
  // and arr further breaks into 
  // const listOfRestaurant = arr[0];
  // const setlistOfRestaurant = arr[1];


  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listofRestaurant.filter(
            (res)=>res.data.avgRating>4
          );
          setlistofRestaurant(filteredList);
        }}>Top Rated Restaurant </button>
      </div>
    
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key ={restaurant.data.id} resData={restaurant} />
        ))}
       
        {/* <RestaurantCard resName ="Rahul Fast food"cuisine = "Burger, Fast food, Pudi" /> */}
      </div>
      </div>
    
  );
};

export default Body;