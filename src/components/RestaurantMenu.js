import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory.js';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  // ✅ Restaurant info
  const restaurantInfo = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  )?.card?.card?.info;

  const name = restaurantInfo?.name;
  const cuisines = restaurantInfo?.cuisines;
  const costForTwoMessage = restaurantInfo?.costForTwoMessage;

  // ✅ Extract categories safely
  const regularCards =
    resInfo?.cards?.find((c) => c.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards;

  // console.log("regularCards:", regularCards);
  const categories = regularCards.filter((c)=>c.card?.card?.["@type"]===
  "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");
  // console.log(categories);

  // const itemCards = regularCards
  //   .map((c) => c?.card?.card?.itemCards)
  //   .filter(Boolean)
  //   .flat();
    // console.log(itemCards);

  return (
    <div className="text-center">
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>{cuisines?.join(", ")}-{costForTwoMessage}</p>
      {/* categories accordian */}
      {categories.map((category)=>(
        <RestaurantCategory data={category?.card?.card} />
        ))}

</div>
  );
};

export default RestaurantMenu;
