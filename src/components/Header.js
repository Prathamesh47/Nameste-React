import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import Basic from "./forms.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";


import useOnline from "../utils/useOnline.js";

import Instamart from "./Instamart.js";

// import Insta from "./insta.js"


export const Title = ()=>(
    <a href="/">

    <img className="h-28 p-2"
    alt="logo"
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"></img>
    </a>

   )
   
    // const [title,setTitle]=useState("Food Villa");

  export const Header = ()=>{
    const [isLogin,setIsLogin]=useState(false);

    const isOnline=useOnline();

    const {user} = useContext(UserContext);

    const cartItems = useSelector(store => store.cart.items);


    const navigate = useNavigate();
       return(
           <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
               <Title/>
               
               
               <div className="nav-items">
                 <ul className="flex py-10 ">
                  
                  <Link to="/">
                  <li className="px-2"></li>
                  Home
                  </Link>
                  
                   
                   <Link to="/about">
                   <li className="px-2">About</li>
                   </Link>
                   <Link to="/contact">
                   <li className="px-2">Contact</li>
                   </Link>
                   <li>Cart</li>
                   <Link to="/instamart">
                   <li className="px-2">Instamart</li>
                   </Link>
                   <Link to="/cart">
                   <li className="px-2">Cart- {cartItems.length}</li>
                   </Link>
                   {/* <Link to ="/insta">
                    <li className="px-2">Insta</li>
                   </Link> */}
                 </ul>
               </div>
               <div className="login-btn">
                <h1>{isOnline? '✅':'🔴'}</h1>

                <span className="p-10 font-bold text-red-900">{user.name}</span>
                
                <button onClick={()=>{ navigate('/login') }}>Login</button> 
                
               </div>
           </div>
       )
   };

   export default Header;