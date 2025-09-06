

const RestaurantCard = (props) => {

 
  ///Destructuring of props

  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo ,cloudinaryImageId,sla} = resData;

  // console.log(props);
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt="Biryani"
      />

      <h3 className="font-bold py-4 text-xl ">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo} </h4>
      <h4>{avgRating} Stars</h4>
      <h3>{sla.deliveryTime} minutes</h3>
    </div>
  );
};
export default RestaurantCard;