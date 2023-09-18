import { useEffect, useState } from "react";
// import {RESTAURANT_TYPE_KEY,
//     MENU_ITEM_TYPE_KEY} from "../constants";
import { swiggy_menu_api_URL } from "../constants";

const useResMenu=(resId,MENU_ITEM_TYPE_KEY
)=>{
    const [menu,setMenu]=useState(null);
    useEffect(() => {
      // Include all dependencies here
     const getMenu = async() =>{
        try {
          const response = await fetch(swiggy_menu_api_URL + resId);
          console.log(response);
          if (!response.ok) {
            const err = response.status;
            throw new Error(err);
          } else {
            const json = await response.json();
    
            // Set restaurant data
           
    
            // Set menu item data
            const menuItems =
              json?.data?.cards
                .find((x) => x.groupedCard)
                ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
                  (x) => x.card?.card
                )
                ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
                ?.map((x) => x.itemCards)
                .flat()
                .map((x) => x.card?.info) || [];
    
            const uniqueMenu = [];
            menuItems.forEach((item) => {
              if (!uniqueMenu.find((x) => x.id === item.id)) {
                uniqueMenu.push(item);
              }
            });
            setMenu(uniqueMenu);
            
          }
        } catch (err) {
          setMenu([]);
         
        }
      }

      getMenu();
      
    
    }, []);
    
    // async function getRestaurantMenu(){
    //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+resId+"&submitAction=ENTER");
    //     const json= await data.json();

    //     console.log(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card.itemCards);

    //     setMenu(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards);  
         
    // }

  

    return menu;
    // return [restaurant, menu];

}

export default useResMenu;

