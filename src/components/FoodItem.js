import { IMG_CDN_URL } from "../constants";
import rupees from "../assets/rupees.png"; // Make sure this path is correct
import {  removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";



const FoodItem = ({ name, category, imageId, price }) => {

  const dispatch = useDispatch();

  const removeFoodItem=()=>{
    dispatch(removeItem());
  };
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 ">
      {/* Ensure IMG_CDN_URL + imageId results in the correct image URL */}
      <img src={IMG_CDN_URL + imageId} alt={name} />

      <h2 className="font-bold text-lg text-blue-500">{name}</h2>
      <h3>{category}</h3>

      {/* Make sure rupees.png is accessible and the path is correct */}
      <h4 className="flex flex-row">
        <div className="py-1">
        <img className="h-5 w-5 " src={rupees} alt="rupees" />
        </div>
        {price / 100}
      </h4>
      <div className=" flex justify-start items-center  mt-2 text-gray-count outline-none border bg-red-500 border-gray-300 text-white w-14 p-1 rounded-md">
      <button
              className="  text-md text-grey-count font-semibold  "
              onClick={() => {removeFoodItem()
            }
          }
          >
          Delete
        </button>  
      </div>
    </div>
  );
};

export default FoodItem;
