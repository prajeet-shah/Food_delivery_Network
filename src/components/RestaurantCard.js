import APP_URL from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props);
  const { name, price, cuisines, avgRating, cloudinaryImageId } =
    props?.cards?.info;
  const { deliveryTime } = props?.cards?.info?.sla;

  return (
    <div className="res-card w-52 m-2 p-2 shadow-sm  bg-gray-200">
      <img className="res-logo w-52 h-48" src={APP_URL + cloudinaryImageId} />
      <h2 className="font-bold">{name}</h2>
      <h2>{price}</h2>
      <h2>{cuisines.slice(2).join(",")}</h2>
      <h2>{avgRating} rating</h2>
      <h2>{deliveryTime} minutes</h2>
      
    </div>
  );
};

export default RestaurantCard;
