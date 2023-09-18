import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant,setRestaurant] = useState(null);
    
    useEffect(()=>{
        const getRestaurantInfo = async  ()=>{
        
            const response =await fetch(FETCH_MENU_URL+resId);
            const res_data=await response.json();
            // console.log(json);
            setRestaurant((res_data?.data?.cards[0]?.card?.card?.info));
            console.log((res_data?.data?.cards[0]?.card?.card?.info));
        
        }
        getRestaurantInfo();
    },[]);

   
        return restaurant
    
};

export default useRestaurant;