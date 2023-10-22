import RestrauntCard from "./RestrauntCard";

import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import  useOnline  from "../utils/useOnline";
import {BiSearchAlt2} from "react-icons/bi"; 
import { SWIGGY_URL } from "../constants";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";
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
  // const {user, setUser} = useContext(UserContext);



  

  // Empty dependency array => once after render
  // dependency arr[searchText]  => once after render + everytime after intial render (my search text changes)
  useEffect(() => {
    // API call
    // console.log("dependencies called")
    getRestaurants();
  }, []);




  async function getRestaurants() {

    
  try {
    const response = await fetch(SWIGGY_URL);
    // if response is not ok then throw new Error
    if (!response.ok) {
      const err = response.status;
      throw new Error(err);
    } else {
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setAllRestaurants(resData);
      setFilteredRestaurant(resData);
    }
  } catch (error) {
    console.error(error); // show error in console
  }
  }
  const isOnline =useOnline();


  if(!isOnline)
  {
    return <h1>🔴 Offline, please check your internet connection</h1>;
  }

  

  // not render (early)
  // if(!allRestaurants) return null;


  
  return allRestaurants?.length === 0 ? (
    <Shimmer/>
  ) :
  
   (
    <div className="w-screen p-2">
      
     
        <div className="  w-screen flex items-center justify-center">
          <div className=" search flex flex-row border border-black-500 p-1 my-5  rounded-lg w-full sm:w-1/2 lg:w-2/5 items-center ">

        <input
          type="text"
          className="focus:outline-none bg-transparent w-full p-2"
          placeholder="Search for Restaurant or Food "
          value={searchInput}
          onChange={(e) => {
            //e.target.vaule=> whatever you write on input
            const data = filterData(searchInput,allRestaurants);
            setFilteredRestaurant(data);
            setSearchInput(e.target.value);
          }}
          />
        <BiSearchAlt2 className="w-6 h-6"/>
          </div>
        </div>

        
        
      
     

      
      
      <div className="w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  p-10 gap-6">


        { filteredRestaurants===undefined ?(
          <p className="font-bold p-3 m-2">Data is loading...</p>
        )
        :
        
        filteredRestaurants.map((restaurant) => {
          return (
            <Link 
            to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
            <RestrauntCard  restaurant={restaurant.info}  /> 
            </Link>

            
          );

        })}
      </div>
    </div>
  );
};

export default Body;
// restaurant={restaurant}