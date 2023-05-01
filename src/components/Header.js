import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import Basic from "./forms.js";


import useOnline from "../utils/useOnline.js";

import Instamart from "./Instamart.js";


export const Title = ()=>(
    <a href="/">

    <img className="h-28 p-2"
    alt="logo"
    src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"></img>
    </a>

   )
   

  export const Header = ()=>{
    // const [title,setTitle]=useState("Food Villa");
    const [isLogin,setIsLogin]=useState(false);
    const isOnline=useOnline();
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
                 </ul>
               </div>
               <div className="login-btn">
                <h1>{isOnline? '✅':'🔴'}</h1>
                
                <button onClick={()=>{ navigate('/login') }}>Login</button> 
                
               </div>
           </div>
       )
   };

   export default Header;