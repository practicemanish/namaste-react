import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

//   const params = useParams();
  console.log(resId);

  if(resInfo === null)return <Shimmer />;
//   const {name} =  resInfo?.cards[2]?.card?.card?.info;
  // ✅ Restaurant info
  const restaurantInfo = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  )?.card?.card?.info;

  const name = restaurantInfo?.name ;
  const cuisines = restaurantInfo?.cuisines;
  const costForTwoMessage = restaurantInfo?.costForTwoMessage;

  // ✅ Extract categories that actually contain itemCards
  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards;

        const itemCards = regularCards
    .map((c) => c?.card?.card?.itemCards) // get only itemCards arrays
    .filter(Boolean) // remove undefined
    .flat(); // flatten into one array


  return(
     <div className="menu">
        <h1>{name}</h1>

        <h4>{cuisines.join(",")}</h4>
        <h4>{costForTwoMessage}</h4>
        <h1>Menu</h1>
        <ul>
           {itemCards.map((item)=> (
            
            <li  key={item.card.info.id}>
                     {item.card.info.name}-{" Rs."} 
                     {item.card.info.price /100  || item.card.info.defaultPrice / 100 }         </li>
           )
          
            
        )}
        </ul>
      </div>
  );
};
// finally restaurant menu feature added

export default RestaurantMenu;
