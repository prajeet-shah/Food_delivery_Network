import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { APP_API } from "../utils/constants";

const Body = () => {
  const [listofcards, setListofcards] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, []);

  const fetchData = async () => {
    let data = await fetch(APP_API);

    let json = await data.json();
    // console.log(json.data.cards);
    setListofcards(json?.data?.cards?.slice(3));
    setFilterRestaurant(json?.data?.cards?.slice(3));
  };

  console.log("body rendered");

  //conditional rendering
  // if (listofcards.length === 0) {
  //   return <Shimmer />;
  // }

  return listofcards.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            // filter by search text
            filterItem = listofcards.filter((res) =>
              res.card.card.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase())
            );
            setFilterRestaurant(filterItem);
            console.log(searchText);
          }}
        >
          search
        </button>
      </div>
      <div>
        <span
          className="restaurant-btn"
          onClick={() => {
            // filter
            const filterItem = listofcards.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListofcards(filterItem);
            console.log(filterItem);
          }}
        >
          Top Rated Restaurant
        </span>
      </div>
      <div className="res-container">
        {filterRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            cards={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
