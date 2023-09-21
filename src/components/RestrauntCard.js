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
    <div className="p-10  m-6 shadow-sm ">
      <div className=" w-[240px] rounded-lg box-border h-[295.98px] flex flex-col items-start justify-center hover:scale-105 transition-all p-2 border-4 ">
        <img
          className=" w-[220px] h-[138.57] rounded-md"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="A colorful hot air balloon floating in the sky"
        />

        <h2 className="font-bold text-sm">{name}</h2>
        <h3 className="text-sm text-gray-500">{cuisines.join(", ")}</h3>

        <h5 className="text-sm text-gray-500">{areaName}</h5>
        <div className="w-full ">
          <span className="flex flex-row w-full items-center justify-center">
            <h4 className="bg-green-600 rounded text-white text-xs flex px-1 py-1  justify-center items-center gap-2">
              <img className="h-4 w-4" src={star} alt="star"/>
              <p>{avgRatingString}</p>
            </h4>
            <h4 className="px-1">•</h4>
            <h4 className="text-xs px-1">{sla?.lastMileTravelString ?? "2.0 km"}</h4>
            <h4 className="p-1">•</h4>
            <h4 className="text-sm px-1">{costForTwo ?? "₹200 for two"}</h4>
          </span>
        </div>
        {/* <h5 className="font-bold">{user.name}-{user.email}</h5> */}
        {/* <h4>{user.name}</h4> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default RestrauntCard;
