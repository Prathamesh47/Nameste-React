// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  ITEM_IMG_CDN_URL,
} from "../constants";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./shimmer";
import useResMenu from "../utils/useResMenu";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // How to read a dyanamic Url params

  const restaurant = useRestaurant(resId);

  const resMenu = useResMenu(resId, MENU_ITEM_TYPE_KEY);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  const removeFoodItem=()=>{
    dispatch(removeItem());
  }
  
  const cartItems = useSelector((store) => store.cart.items);
  const notify=()=>{
    toast.success('🍟Item added into the cart!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="flex h-60 justify-evenly items-center bg-blue-dark text-gray p-4 bg-black text-white w-100 mx-auto sm:m-auto">
          {/* <h1>Restaurant id:{resId}</h1> */}
          <img
            className="w-[254px] h-[165px] rounded-md mon:w-[130] mob:[81px]"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant.name}
          />
          <div className="flex flex-col basis-[540] m-5">
            <h2 className="text-3xl max-w-[538px] font-semibold">
              {restaurant?.name}
            </h2>

            <h3>{restaurant?.cuisines.join(", ")}</h3>

            <h3 className="text-yellow-500">⭐{restaurant?.avgRating} </h3>
            {/* <div>|</div> */}
            <div>{restaurant?.sla.slaString}</div>
            <h3>{restaurant?.costForTwoMessage}</h3>
          </div>
        </div>

        <div></div>

        <div className="menu">
          <h3 className="font-bold text-xl p-2  mt-2 mx-[50px] justify-evenly items-end">
            MENU
          </h3>
          {/* <p className="menu-count p-2 mx-[50px] ">{resMenu.length} ITEMS</p> */}
          <div className="mx-[50px] py-10 flex flex-col gap-4  ">
            {resMenu ? (
              resMenu.map((item) => {
                const name = item?.name;
                return (
                    <div className="menu-item shadow-lg  px-[50px] border-b rounded-lg p-2 border-red-500 w-full flex justify-between  ">
                      <div className="flex flex-col items-start justify-center ">
                        <h1 className="  text-lg font-bold w-3/5">
                          {name}
                        </h1>
                        <p className="item-cost">Rs-{item.price / 100}</p>
                        <p className="item-desc mt-[14px] text-gray-400 w-inherit  ">{item?.description}</p>
                      </div>
                      <div className="menu-img-wrapper  items-end flex flex-col justify-center w-[300px] overflow-hidden h-auto ">
                        {item?.imageId && (
                          <img
                            className="menu-item-img rounded-md h-[100px] w-[100px] border-r-4 "
                            src={ITEM_IMG_CDN_URL + item?.imageId}
                            alt={item?.name}
                          />
                        )}
                        <div className=" flex justify-evenly items-center p-1 mt-2.5 text-gray-count outline-none border bg-green-100 hover:bg-green-600 hover:text-white border-gray rounded-md">
                          <button
                            className="  text-xl text-grey-count font-semibold  "
                            onClick={() => {addFoodItem(item);
                              notify()}
                            }
                          >
                            ADD +
                          </button>
                          
                        </div>
                        {/* <div className="flex">
                          <button>-</button>
                          <div>{cartItems.length}</div>
                          <button>+</button> */}
                        {/* </div> */}
                      </div>
                    </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
