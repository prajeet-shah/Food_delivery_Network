import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { APP_API } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofcards, setListofcards] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    // console.log("useEffect");
  }, []);

  const fetchData = async () => {
    let data = await fetch(APP_API);

    let json = await data.json();
    console.log(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setListofcards(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
    setFilterRestaurant(
      json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
  };

  // console.log("body rendered");

  //conditional rendering
  // if (listofcards.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>you're offline, Please check your internet connection!</h1>;

  return listofcards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex ">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="search-box border border-black px-2 mx-4"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-blue-500 border border-black px-3 m-3"
            onClick={() => {
              // filter by search text
              filterItem = listofcards.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );

              setFilterRestaurant(filterItem);
              console.log(searchText);
            }}
          >
            search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            className="restaurant-btn bg-blue-500 border border-black px-3 mx-3 bg-gray-200"
            onClick={() => {
              // filter
              const filterItem = listofcards.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterRestaurant(filterItem);
              console.log(filterItem);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap ml-10">
        {filterRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard cards={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
