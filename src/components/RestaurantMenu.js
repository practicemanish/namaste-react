import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState (null);

  useEffect (() => {
    fetchMenu ();
    console.log ('useEffect menu ka chal raha hai');
  }, []);


  const fetchMenu = async () => {
    
    const data = await fetch (
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.2664939&lng=83.0003942&restaurantId=435680&catalog_qa=undefined&submitAction=ENTER'
    );
    const json = await data.json ();
    console.log (json);
    setResInfo (json.data);
  };
  if(resInfo === null)return <Shimmer />;
//   const {name} =  resInfo?.cards[2]?.card?.card?.info;
const restaurantInfo =
  resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  )?.card?.card?.info;

const name = restaurantInfo?.name || "Unknown";
const cuisines = restaurantInfo?.cuisines || [];
const costForTwoMessage = restaurantInfo?.costForTwoMessage || "";
const itemCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];


  return(
     <div className="menu">
        <h1>{name}</h1>

        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwoMessage}</h4>
        <h1>Menu</h1>
        <ul>
           {itemCards.map((item)=> (
            <li>
                     {item.card.info.name}-{" Rs."} 
                     {item.card.info.price /100 }           </li>
           )
          
            
        )}
          <li>Onion pizza</li>
          <li>Cheesy pizza</li>
          <li>Burger</li>
          <li>Biryani</li>
        </ul>
      </div>
  );
};

export default RestaurantMenu;
