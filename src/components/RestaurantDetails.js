// import { useParams } from "react-router-dom";
// import Shimmer from "./shimmer";
// import useRestaurant from "../utils/useRestaurant";
// import RestaurantInfo from "../components/RestaurantInfo";
// import RestaurantMenu from "../components/RestaurantMenu";


// const RestaurantDetails = ()=>{
//     const {resId} = useParams();

//     const restaurant = 
//     useRestaurant(
//         resId
//     );
//     return !restaurant ? (
//         <Shimmer/>
//     ) : (
//         <div className="container">
//             <RestaurantInfo {...restaurant.info}/>
//             <RestaurantMenu menu = {restaurant.menu}/>
//         </div>
//     )
// }