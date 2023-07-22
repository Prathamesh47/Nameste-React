// import React from 'react';
// import { IMG_CDN_URL } from "../constants";


// const RestaurantInfo = (restaurant)=>{
//     return (
//         <div>
//             <img
//                 className='w-[254px] h-[165px] '
//                 src = {IMG_CDN_URL + restaurant?.cloudinaryImageId}
//                 alt = {restaurant?.name}
//                 />

//             <div>
//                 <h2 className='flex flex-col m-5'>
//                     {restaurant?.name}
//                 </h2>
//                 <p>
//                     {restaurant?.cuisines.join(", ")}
//                 </p>
//                 <div>
//                     <div>
//                         <span>{restaurant?.avgRating}</span>
//                     </div>
//                     <div>|</div>
//                     <div>{restaurant?.costForTwoMsg}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }