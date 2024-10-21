import cards from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {cards.map((restaurant) => (
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
