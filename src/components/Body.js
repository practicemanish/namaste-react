
import RestaurantCard from "./RestaurantCard.js"
import { useEffect, useState } from "react";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";




const Body = () => {
//local state variable
const [listofRestaurant, setlistofRestaurant] = useState([]);
const [searchText, setsearchText] = useState("");

const [filteredRestaurant, setfilteredRestaurant]= useState([]);

console.log("Body Rendered",listofRestaurant );

// or we can also write it 
  // const arr = useState(reslist)
  // const [listOfRestaurant, setlistOfRestaurant] = arr;
  // and arr further breaks into 
  // const listOfRestaurant = arr[0];
  // const setlistOfRestaurant = arr[1];


//   Some Important points about useEffect
// 1.if no dependecy array => useEffect is called on every render
//   2.if dependecy array is empty = [] => useEffect is called on initial render(just once)
//   3.if dependency array is [btnNameReact] = > called  everytime btnNameReact is updated
  useEffect(()=>{
    fetchData();
  }, []);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2664939&lng=83.0003942&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );

    const json = await data.json();

    // console.log(json);

    // optional chaining


    // setlistofRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

const onlineStatus = useOnlineStatus();
if (onlineStatus === false) {
  return (
    <h1>Looks like you are offline. Please check your internet connection.</h1>
  );
}


  if (listofRestaurant.length === 0) {
  return <Shimmer />;
}
return (
    <div className="body">
      <div className="filter">
        <div className="m-4 p-4 ">
          <input type="text"  className="border border-solid border-black " value={searchText}
          onChange={(e) => {setsearchText(e.target.value);

          } } 
          />
          <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
            //filter the restaurants cards and update the ui
            //seachTEXT
            console.log(searchText);
            const filteredRestaurant = listofRestaurant.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())); 

            setfilteredRestaurant(filteredRestaurant);
          }}>Search</button>
         
          
        </ div>
         
        <button className="flex px-4 py-2 bg-gray-100 m-2 items-center rounded-full font-semibold" onClick={()=>{
          const filteredList = listofRestaurant.filter(
            (res)=>res.info.avgRating>4
          );
          setlistofRestaurant(filteredList);
        }}>Top Rated Restaurant </button>
      </div>
    
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key ={restaurant.info.id}
           to={"/restaurants/"+ restaurant?.info?.id}
           >
            <RestaurantCard  resData={restaurant.info} /></Link>
        ))}
       
        {/* <RestaurantCard resName ="Rahul Fast food"cuisine = "Burger, Fast food, Pudi" /> */}
      </div>
      </div>
    
  );
};

export default Body;