
import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";




const Body = () => {
//local state variable
const [listofRestaurant, setlistofRestaurant] = useState([]);

// or we can also write it 
  // const arr = useState(reslist)
  // const [listOfRestaurant, setlistOfRestaurant] = arr;
  // and arr further breaks into 
  // const listOfRestaurant = arr[0];
  // const setlistOfRestaurant = arr[1];

  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2664939&lng=83.0003942&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );

    const json = await data.json();

    console.log(json);

    // optional chaining


    // setlistofRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };
  if (listofRestaurant.length === 0) {
  return <Shimmer />;
}



  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          const filteredList = listofRestaurant.filter(
            (res)=>res.info.avgRating>4
          );
          setlistofRestaurant(filteredList);
        }}>Top Rated Restaurant </button>
      </div>
    
      <div className="res-container">
        {listofRestaurant.map((restaurant) => (
          <RestaurantCard key ={restaurant.info.id} resData={restaurant.info} />
        ))}
       
        {/* <RestaurantCard resName ="Rahul Fast food"cuisine = "Burger, Fast food, Pudi" /> */}
      </div>
      </div>
    
  );
};

export default Body;