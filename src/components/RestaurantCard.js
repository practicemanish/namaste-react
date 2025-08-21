

const RestaurantCard = (props) => {

 
  ///Destructuring of props

  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime ,cloudinaryImageId } = resData;

  // console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt="Biryani"
      />

      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{costForTwo} </h4>
      <h4>{avgRating} Stars</h4>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};
export default RestaurantCard;