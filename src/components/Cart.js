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
        <div className="h-screen">

            <h1 className="font-bold text-2xl m-5 justify-center text-center " >Your Cart ({cartItems.length} items)</h1>
            <div className="px-10">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 " 
            onClick={()=>handleClearCart()} >Clear Cart</button>
            </div>
            <div className="w-full grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  p-10 gap-6">
            {cartItems  ? cartItems.map((item) => (
            < FoodItem key={item} {...item} />

            )): <div>Loading...</div>}
            </div>
           
            
            
        </div>
    );
};

export default Cart;