

const RestaurantCard = (props) => {

 
  ///Destructuring of props

  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo ,cloudinaryImageId,sla} = resData;

  // console.log(props);
  return (
    <div className=" bg-white  m-4 p-4 w-[250px] h-[410px] rounded-lg hover:bg-gray-200 transition-all duration-300 overflow-hidden flex flex-col justify-between" >
      <img
        className="rounded-lg h-40 w-full object-cover"
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