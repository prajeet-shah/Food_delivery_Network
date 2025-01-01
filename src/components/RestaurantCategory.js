import { useState } from "react";
import ItemList from "./ItemList";
useState

const RestaurantCategory = ({ data , showItems , setShowItems  }) => {
  // console.log(data)

  
  

  return (
    <div className="bg-gray-50 w-6/12 my-2 m-auto  p-3">
      <div className="flex justify-between">
        <div className="font-bold text-xl ">{data.title} </div>
        <span
          className="cursor-pointer"
          onClick={() => {
            console.log("clicked");
            // setShowItems(!showItems)
            // showItems ?setShowItems(false):setShowItems(true)
            setShowItems();
            
          }}
        >
          arrow
        </span>
      </div>
      <div className="{}">
      {showItems && <ItemList items={data.itemCards} />}
      </div>
      
    </div>
  );
};

export default RestaurantCategory;
