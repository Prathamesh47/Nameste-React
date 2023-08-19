import { useState, useContext } from "react";
import {Link, useNavigate} from "react-router-dom";
import Basic from "./forms.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import foodpavilion from "../assets/download.png";


import useOnline from "../utils/useOnline.js";

import Instamart from "./Instamart.js";

// import Insta from "./insta.js"


export const Title = ()=>(
    <a href="/">

    <img className="h-24  w-100"
    alt="logo"
    src={foodpavilion}></img>
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
      

        <div className=" h-[100px] flex justify-between  shadow-lg sm:from-blue-100 sm:to-blue-200">
          
        <Title />
         
        <div className="nav-items">
          <ul className="flex py-10">
            <div className="hover:bg-orange-400 rounded-md p-2">
              
              <Link to="/">
                <li className="px-2">Home</li>
              </Link>
            </div>
            
            <div className="hover:bg-orange-400 rounded-md p-2">
              <Link to="/about">
                <li className="px-2">About</li>
              </Link>
            </div>
      
            <div className="hover:bg-orange-400 rounded-md p-2">
              <Link to="/contact">
                <li className="px-2">Contact</li>
              </Link>
            </div>
            
            <div className="hover:bg-orange-400 rounded-md p-2">
              <Link to="/instamart">
                <li className="px-2">Instamart</li>
              </Link>
            </div>
            
            <div className="hover:bg-orange-400 rounded-md p-2">
              <Link to="/cart">
                <li className="px-2 ">Cart- {cartItems.length}</li>
              </Link>
            </div>
          </ul>
        </div>
        
        <div className="login-btn flex px-5 py-1">
        {/* <h1 className="mt-10 px-8 mb-8">{isOnline ? '✅' : '🔴'}</h1> */}

          <button className="hover:text-orange-400 mt-8 mb-8" onClick={() => { navigate('/login') }}>Login</button> 
        </div>
      </div>
      

       )
   };

   export default Header;