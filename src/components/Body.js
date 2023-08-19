import RestrauntCard from "./RestrauntCard";
import {restaurantList} from "../constants";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import {Link} from "react-router-dom";
import { filterData } from "../utils/helper";
import  useOnline  from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
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
  const {user, setUser} = useContext(UserContext);



  

  // Empty dependency array => once after render
  // dependency arr[searchText]  => once after render + everytime after intial render (my search text changes)
  useEffect(() => {
    // API call
    // console.log("dependencies called")
    {getRestaurants()};
  }, []);




  async function getRestaurants() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();
  //   // console.log(json);
  // // Optional Chaining
  //   // setAllRestaurants(json.data.cards[2].data.data.cards);
  //   // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  //   console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //   setAllRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  try {
    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
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
        {/* <input value={user.name}
              onChange={(e) => 
                setUser({
                  ...user,
                  name:e.target.value,
                  
                })
              }></input>
        <input value={user.email}
              onChange={(e) => 
                setUser({
                  ...user,
                  email:e.target.value,
                })
              }></input> */}
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
        <RestrauntCard resta,urant ={restaurantList[10]}/>
        <RestrauntCard restaurant ={restaurantList[11]}/>
      </div> */}
      
      <div className="flex flex-wrap">


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
    </>
  );
};

export default Body;
// restaurant={restaurant}