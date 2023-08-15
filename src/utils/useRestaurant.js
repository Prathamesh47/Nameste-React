import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resId) => {
    const [restaurant,setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        
        const response =await fetch(FETCH_MENU_URL+resId);
        const res_data=await response.json();
        // console.log(json);
        setRestaurant((res_data?.data?.cards[0]?.card?.card?.info));
        console.log((res_data?.data?.cards[0]?.card?.card?.info));
        // const menuItemsList = res_data.data.cards[2]["groupedCard"].cardGroupMap.REGULAR.cards;
        // const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        // const NestedItemCategory = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";


        // const menu = menuItemsList.map((item=>{
        //     if((item.card.card['@type'] === itemCategory || item.card.card['@type'] === NestedItemCategory)){
        //         return item.card.card;
        //     }
        // }))

        // const modifiedData={
        //     info : res_data.data.card[0].card.card.info,
        //     menu : menu.filter(value => value!==undefined)
        // };
        // setRestaurant(modifiedData);
    }
        return restaurant
    
};

export default useRestaurant;