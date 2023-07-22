import { useEffect, useState } from "react";
import {RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY} from "../constants";

const useResMenu=(
    RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
)=>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        getRestaurantMenu();
    },[])
    const [restaurant, setRestaurant] = useState(null);
    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52630");
        const json= await data.json();
        console.log(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[7].card.card.itemCards);
        setMenu(json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[7].card.card.itemCards)

        // const restaurantData =
        //   json?.data?.cards
        //     ?.map((x) => x.card)
        //     ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        //     ?.info || null;
        // setRestaurant(restaurantData);

        // const menuItemsData =
        // json?.data?.cards
        //   .find((x) => x.groupedCard)
        //   ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        //     (x) => x.card?.card
        //   )
        //   ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        //   ?.map((x) => x.itemCards)
        //   .flat()
        //   .map((x) => x.card?.info) || [];

        //   const uniqueMenuItems = [];
        // menuItemsData.forEach((item) => {
        //   if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        //     uniqueMenuItems.push(item);
        //   }
        // });
        // setMenu(uniqueMenuItems);
      
        
         
    }

    return menu;
    // return [restaurant, menu];

}

export default useResMenu;

