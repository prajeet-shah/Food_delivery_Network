import APP_URL from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props.cards.card.card.info);
  const { name, price, cuisines, avgRating, cloudinaryImageId } =
    props?.cards?.card?.card?.info;
  const { deliveryTime } = props?.cards?.card?.card?.info?.sla;

  return (
    <div className="res-card">
      <img className="res-logo" src={APP_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h2>{price}</h2>
      <h2>{cuisines.join(",")}</h2>
      <h2>{avgRating} rating</h2>
      <h2>{deliveryTime} minutes</h2>
    </div>
  );
};

export default RestaurantCard;
