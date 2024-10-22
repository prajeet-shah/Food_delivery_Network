import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofcards, setListofcards] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("useEffect");
  }, []);

  const fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );

    let json = await data.json();
    console.log(json.data.cards);
    setListofcards(json?.data?.cards?.slice(3));
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
        {listofcards.map((restaurant) => (
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
