import RestrauntCard from "./RestrauntCard";
import {restaurantList} from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import  useOnline  from "../utils/useOnline";
// What is State
// what is React Hooks? ->{functions} normal java script, one of most used hook is useState
// what is useState



// Conditional Rendering
// if restaurant is empty => shimmer UI
// if restaurant has data=> actual data UI

const Body = () => {
  // const searchTxt="KFC";

  // SearchText is a local state variable

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState(); // To create state variable
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  

  // Empty dependency array => once after render
  // dependency arr[searchText]  => once after render + everytime after intial render (my search text changes)
  useEffect(() => {
    // API call
    // console.log("dependencies called")
    {getRestaurants()};
  }, []);

  console.log("render");


  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4587777&lng=73.8426415&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  // Optional Chaining
    setAllRestaurants(json.data.cards[2].data.data.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    console.log((json?.data?.cards[2]?.data?.data?.cards));
  }
  const isOnline =useOnline();

  if(!isOnline)
  {
    return <h1>🔴 Offline, please check your internet connection</h1>;
  }

  console.log("render");

  // not render (early)
  // if(!allRestaurants) return null;

  
  return allRestaurants?.length === 0 ? (
    <Shimmer/>
  ) :
  
   (
    <>
      <div className="search-container p-5 bg-pink-50 my-5 ">
        <input
          type="text"
          className="focus:bg-purple-300 p-2 m-2 "
          placeholder="Search"
          value={searchInput}
          onChange={(e) => {
            //e.target.vaule=> whatever you write on input
            setSearchInput(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-800 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            //need to filter data
            //update the data
            // console.log(searchInput);
            const data = filterData(searchInput,allRestaurants);
            // console.log(data);
            setFilteredRestaurant(data);
          }}
        >
          Search
        </button>
      </div>

      {/* <div className="restaurant-list">
        <RestrauntCard restaurant ={restaurantList[0]}/>
        <RestrauntCard restaurant ={restaurantList[1]}/>
        <RestrauntCard restaurant ={restaurantList[2]}/>
        <RestrauntCard restaurant ={restaurantList[3]}/>
        <RestrauntCard restaurant ={restaurantList[4]}/>
        <RestrauntCard restaurant ={restaurantList[5]}/>
        <RestrauntCard restaurant ={restaurantList[6]}/>
        <RestrauntCard restaurant ={restaurantList[7]}/>
        <RestrauntCard restaurant ={restaurantList[8]}/>
        <RestrauntCard restaurant ={restaurantList[9]}/>
        <RestrauntCard restaurant ={restaurantList[10]}/>
        <RestrauntCard restaurant ={restaurantList[11]}/>
      </div> */}

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link 
            to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
            <RestrauntCard  restaurant={restaurant}  /> 
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
// restaurant={restaurant}