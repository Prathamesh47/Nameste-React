
import { IMG_CDN_URL } from "../constants";
// import UserContext from "../utils/UserContext";
// import { useContext } from "react";
//Optional Chaining hw
  const RestrauntCard = ({restaurant}) => {
    const {name,cuisines,cloudinaryImageId,costForTwo,areaName,avgRatingString,sla} = restaurant;
    // const {user} = useContext(UserContext);
    return(
      <div className="p-10 flex items-center justify-center m-6 shadow-sm">
      <div className="w-[240px] rounded-lg box-border h-[350px] border-4 hover:scale-125 p-2"> 
      {/* <div className=" items-center flex flex-col w-[300px] h-[350px] p-2 m-1 shadow-lg bg-pink-50 "> */}
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="Description of the image" />

        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
  
        <h5>{areaName}</h5>
        <div className="py-1">
        <span className="flex  items-center   justify-between ">
          <h4 className="bg-green-400 rounded p-1">
            ⭐{avgRatingString}
          </h4>
          <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
        </span>
        </div>
        {/* <h5 className="font-bold">{user.name}-{user.email}</h5> */}
          {/* <h4>{user.name}</h4> */}
      {/* </div> */}
      </div>
      </div>
    );
  }

  export default RestrauntCard;

 