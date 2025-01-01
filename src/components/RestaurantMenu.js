import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useState } from "react";

import { useParams } from "react-router";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems , setShowItems] = useState(null)

  const resMenu = useRestaurantMenu(resId);

  if (resMenu === null) return <Shimmer />;
  const { name, avgRating, costForTwoMessage, cuisines, areaName } =
    resMenu?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card || {};

  // console.log(resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const nestedCategories =
    resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  console.log(categories);
  // console.log(nestedCategories)

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold font-sans text-2xl">{name}</h1>
        {/**<p>Rating: {avgRating}</p> */}
        <p className="font-bold font-sans text-xl">
          Cost for Two: {costForTwoMessage}
        </p>
        {/** <p>Cuisines: {cuisines?.join(", ")}</p>*/}
      </div>

      <div>
        {categories.map((category , index) => (
          <RestaurantCategory key={category.card.card.title} data={category.card.card} 
            showItems={ index == showItems ? true : false}
            setShowItems = {()=> setShowItems(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
