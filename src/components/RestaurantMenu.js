import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";

const RestaurantMenu = () =>{
    const {resId} = useParams();
    // How to read a dyanamic Url params

    const restaurant = useRestaurant(resId)

    return !restaurant?(
        <Shimmer/>
        ):(
        <div>
            <h1>Restaurant id:{resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL+restaurant.cloudinaryImageId}/>
            <h3>{restaurant?.areaName}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMessage}</h3>
        </div>
    );
};

export default RestaurantMenu;