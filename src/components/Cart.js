import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";


const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch()
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }
    console.log(< FoodItem key={cartItems} {...cartItems} />)


    return(
        <div>

            <h1 className="font-bold text-2xl m-5 justify-center text-center text-red-600" >Cart Items - {cartItems.length}</h1>
            <button className="bg-green-100 p-2 m-5" 
            onClick={()=>handleClearCart()} >Clear Cart</button>
            <div className="flex flex-wrap">
            {cartItems  ? cartItems.map((item) => (
            < FoodItem key={item} {...item} />

            )): <div>Loading...</div>}
            </div>
           
            
            
        </div>
    );
};

export default Cart;