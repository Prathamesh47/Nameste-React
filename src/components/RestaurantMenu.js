// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, MENU_ITEM_TYPE_KEY } from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";
import useResMenu from "../utils/useResMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // How to read a dyanamic Url params

  const restaurant = useRestaurant(resId);

  const resMenu = useResMenu(resId,MENU_ITEM_TYPE_KEY);

 

  const dispatch = useDispatch();

  

  const addFoodItem=(item)=>{
    dispatch(addItem(item))
  }

 

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="flex h-60 justify-evenly items-center bg-blue-dark text-gray p-4 bg-black text-white w-100 mx-auto sm:m-auto">
          {/* <h1>Restaurant id:{resId}</h1> */}
          <img className="w-[254px] h-[165px] mon:w-[130] mob:[81px]" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant.name}/>
          <div className="flex flex-col basis-[540] m-5">
          <h2 className="text-3xl max-w-[538px] font-semibold">{restaurant?.name}</h2>

          <h3>{restaurant?.cuisines.join(", ")}</h3>
          
          <h3 className="text-yellow-500">⭐{restaurant?.avgRating} </h3>
          {/* <div>|</div> */}
          <div>{restaurant?.sla.slaString}</div>
          <h3>{restaurant?.costForTwoMessage}</h3>
          </div>

        </div>

        <div>
          
        </div>

        <div className="menu">
          <h3 className="font-bold text-xl p-2  mt-2 mx-[200px] justify-evenly ">MENU</h3>
          <div className="mx-[200px]">
            {resMenu ? resMenu.map((item) => {
              const name  = item?.name;
              return (
                <div className="flex  basis-[400px]">
                  <h1 className="m-2 p-2 text-lg font-bold w-3/5">{name}</h1>
                  <div className=" flex justify-evenly items-center w-[100px] h-[34px] mt-2.5 text-gray-count outline-none border bg-orange-100 hover:bg-red-400 border-gray rounded-md">
                  <button
                    className="  text-xl text-grey-count font-semibold  "
                    onClick={() => addFoodItem(item)}
                  >
                    Add Item
                  </button>
                  </div>
                </div>
              );
            }):<div></div>}
          </div>

        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
