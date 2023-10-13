import { IMG_CDN_URL } from "../constants";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";
//Optional Chaining hw
import star from "../assets/star.png"

const RestrauntCard = ({ restaurant }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    areaName,
    avgRatingString,
    sla,
  } = restaurant;
  // const {user} = useContext(UserContext);
  return (
    
      <div className="h-[295.98px] w-3/4 md:w-full rounded-lg box-border  flex flex-col items-start justify-center hover:scale-105 shadow-md transition-all p-2  ">
        <img
          className="overflow-hidden sm:w-1/2 md:w-full object-cover rounded-md"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="A colorful hot air balloon floating in the sky"
        />

        <h2 className="font-bold text-sm">{name}</h2>
        <h3 className="text-sm text-gray-500 text-clip overflow-hidden ...">{cuisines.join(", ")}</h3>

        <h5 className="text-sm text-gray-500">{areaName}</h5>
        <div className="w-full flex justify-between items-end ">
          <span className="flex flex-col md:flex-row items-start  w-full md:items-center justify-between">
            <h4 className="bg-green-600 rounded text-white text-xs flex px-2 py-1  justify-between items-center gap-2">
              <img className="h-4 w-4" src={star} alt="star"/>
              <p>{avgRatingString}</p>
            </h4>
            <h4 className="px-1">•</h4>
            <h4 className="text-xs px-1">{sla?.lastMileTravelString ?? "2.0 km"}</h4>
            <h4 className="p-1">•</h4>
            <h4 className="text-sm px-1">{costForTwo ?? "₹200 for two"}</h4>
          </span>
        </div>
       
      </div>
    
  );
};

export default RestrauntCard;
