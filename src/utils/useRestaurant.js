import { useState,useEffect } from "react";
import { swiggy_menu_api_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant,setRestaurant] = useState(null);
    const getRestaurantInfo = async  ()=>{
        
        const response =await fetch(swiggy_menu_api_URL+resId);
        const res_data=await response.json();
        // console.log(json);
        setRestaurant((res_data?.data?.cards[2]?.card?.card?.info));
        console.log((res_data?.data?.cards[2]?.card?.card));
    
    }
    
    useEffect(()=>{
        
        getRestaurantInfo();
    },[]);

   
        return restaurant
    
};

export default useRestaurant;