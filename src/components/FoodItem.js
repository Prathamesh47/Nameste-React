import { IMG_CDN_URL } from "../constants";
import rupees from "../assets/rupees.png"; // Make sure this path is correct

const FoodItem = ({ name, category, imageId, price }) => {
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
    </div>
  );
};

export default FoodItem;
