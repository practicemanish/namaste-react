
import RestaurantCard from "./RestaurantCard.js"
import resList from "../utils/mockData.js";

  

const Body = () => {


  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key ={restaurant.data.id} resData={restaurant} />
        ))}
        {resList.map((restaurant) => (
          <RestaurantCard key ={restaurant.data.id} resData={restaurant} />
        ))}
        {resList.map((restaurant) => (
          <RestaurantCard key ={restaurant.data.id} resData={restaurant} />
        ))}
        {/* <RestaurantCard resData={resList[10]} />
         <RestaurantCard resData={resList[11]} />
         <RestaurantCard resData={resList[1]} />
         <RestaurantCard resData={resList[2]} />
         <RestaurantCard resData={resList[0]} />
         <RestaurantCard resData={resList[3]} />
         <RestaurantCard resData={resList[4]} />
         <RestaurantCard resData={resList[5]} />
         <RestaurantCard resData={resList[10]} />
         <RestaurantCard resData={resList[6]} />
         <RestaurantCard resData={resList[7]} />
         <RestaurantCard resData = {resList[8]}/>
         <RestaurantCard resData = {resList[9]}/>
         <RestaurantCard resData = {resList[10]}/>

       */}

        {/* <RestaurantCard resName ="Rahul Fast food"cuisine = "Burger, Fast food, Pudi" /> */}
      </div>
    </div>
  );
};

export default Body;