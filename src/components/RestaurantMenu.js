import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

import { useParams } from "react-router";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, cuisines, areaName } =
    resMenu?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  return (
    <div>
      <h1>{name}</h1>
      <p>Rating: {avgRating}</p>
      <p>Cost for Two: {costForTwoMessage}</p>
      <p>Cuisines: {cuisines?.join(", ")}</p>
      <p>Area: {areaName}</p>

      <p>items name </p>

      {itemCards?.length === 0 ? (
        <h1>Items not available</h1>
      ) : (
        itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))
      )}
    </div>
  );
};

export default RestaurantMenu;
