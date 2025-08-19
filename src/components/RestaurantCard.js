

const RestaurantCard = (props) => {

 
  ///Destructuring of props

  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;

  // console.log(props);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          resData.data.cloudinaryImageId
        }
        alt="Biryani"
      />

      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>Rs{costForTwo / 100} For two</h4>
      <h4>{avgRating} Stars</h4>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};
export default RestaurantCard;