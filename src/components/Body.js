import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  //local state variable
  const [listofRestaurant, setlistofRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  // console.log(listofRestaurant);

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
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.2664939&lng=83.0003942&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const allRestaurants = json?.data?.cards
      ?.map((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      ?.filter(Boolean)
      ?.flat();

    // optional chaining

    // setlistofRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setlistofRestaurant(allRestaurants || []);
    setfilteredRestaurant(allRestaurants || []);
    console.log(allRestaurants);

    // console.log(json?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );
  }

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 pt-2 pb-2 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="m-4 p-4 flex items-center gap-2 w-full sm:w-1/2 ">
          <input
            type="text"
            className=" flex-1 border border-solid border-gray-400 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 "
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white
           rounded-lg hover:bg-green-600 transition "
            onClick={() => {
              //filter the restaurants cards and update the ui
              //seachTEXT
              const filteredRestaurant = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-6 py-2 bg-gray-200 rounded-full font-medium hover:bg-gray-300 transition "
          onClick={() => {
            const filteredList = listofRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setlistofRestaurant(filteredList);
          }}
        >
          ⭐ Top Rated Restaurant{" "}
        </button>
      </div>

      <div className="container mx-auto px-6 pb-8 py-1">
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>

        {/* <RestaurantCard resName ="Rahul Fast food"cuisine = "Burger, Fast food, Pudi" /> */}
      </div>
    </div>
  );
};

export default Body;
