import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resMenu, setResMenu] = useState(null);
  //fetchData

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await fetch(MENU_API + resId);
    let json = await data.json();
    
    setResMenu(json.data);
  };

  return resMenu;
};

export default useRestaurantMenu;
