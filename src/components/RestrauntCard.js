
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
//Optional Chaining hw
  const RestrauntCard = ({restaurant}) => {
    const {name,cuisines,cloudinaryImageId,lastMileTravelString} = restaurant.data;
    const {user} = useContext(UserContext);
    return(
      <div className="w-[200px] p-2 m-1 h-60 shadow-lg bg-pink-50 ">
        <img src={IMG_CDN_URL
      +cloudinaryImageId}/>
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} </h4>
        <h5 className="font-bold">{user.name}-{user.email}</h5>
          {/* <h4>{user.name}</h4> */}
      </div>
    );
  }

  export default RestrauntCard;

 