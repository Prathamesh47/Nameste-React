import { useEffect, useState } from "react";
import {RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY} from "../constants";

const useResMenu=(resId,
    RESTAURANT_TYPE_KEY,
  MENU_ITEM_TYPE_KEY
)=>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        getRestaurantMenu();
    },[])
    
    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&submitAction=ENTER");
        const json= await data.json();

        // const menuItemsData = 
        //     json?.data?.cards
        //         ?.find((x)=>x.groupedCard)
        //         ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        //             (x) => x.card?.card
        //         )
        //         ?.filter((x)=>x["@type"]==MENU_ITEM_TYPE_KEY)
        //         ?.map((x)=>x.itemCards)
        //         .flat()
        //         .map((x)=>x.card?.info);

        // const uniqueMenuItems = [];
        // menuItemsData.forEach((item)=>{
        //     if(!uniqueMenuItems.find((x)=>x.id===item.id)){
        //         uniqueMenuItems.push(item);
        //     }
        // })
        // setMenu(uniqueMenuItems);

        // console.log(uniqueMenuItems)
        
        setMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[1].itemCards);  
        console.log(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.categories[1].itemCards);
         
    }

    return menu;
    // return [restaurant, menu];

}

export default useResMenu;

