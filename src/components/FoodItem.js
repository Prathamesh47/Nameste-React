import { IMG_CDN_URL } from "../constants";

const FoodItem = ({name, category, imageId, price})=>{
    return(
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            
            <img src = {IMG_CDN_URL + imageId} alt={name} /> 
           
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{category}</h3>
            <h4>Rupees: {price/100}</h4>
        </div>
    )
}

export default FoodItem;
