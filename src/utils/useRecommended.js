import {useEffect, useState} from "react";

const useRecommended = (resId)=>{
    const [recom,setRecom]=useState(null);

    useEffect(()=>{
        getRecommended();
    },[])

    async function getRecommended(){
        const res =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId="+resId+"&submitAction=ENTER");
        const json=await res.json();
        setRecom(json.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
       


    }
    return recom;
}

export default useRecommended;

