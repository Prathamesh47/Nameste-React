import { useEffect, useState } from "react";

const useResMenu=()=>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        getRestaurantMenu();
    })
    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4582424&lng=73.843365&restaurantId=81625&submitAction=ENTER")
        
         
    }

    return menu;

}

export default useResMenu;

