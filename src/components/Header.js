// import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Basic from "./forms.js";
// import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import foodpavilion from "../assets/download.png";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import {IoMdContact} from "react-icons/io";
import {RiHome7Line} from "react-icons/ri";
// import { UseSelector } from "react-redux/es/hooks/useSelector";


// import useOnline from "../utils/useOnline.js";

// import Instamart from "./Instamart.js";

// import Insta from "./insta.js"

export const Title = () => (
  <a href="/">
    <img className="h-24  w-100" alt="logo" src={foodpavilion}></img>
  </a>
);

// const [title,setTitle]=useState("Food Villa");

export const Header = () => {
  // const [isLogin,setIsLogin]=useState(false);

  // const isOnline=useOnline();

  // const {user} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  const navigate = useNavigate();
  return (
    <div className="h-100 flex flex-col md:flex-row justify-between shadow-lg sm:from-blue-100 sm:to-blue-200 sm:px-4">
      <div className="mb-2 sm:mb-0">
        <Title />
      </div>


      <div className="nav-items  justify-center   items-center">
        <ul className="flex px-10 mt-5">


          <div className=" p-2 ">
            <Link to="/">
              <div className="flex flex-row  p-2 hover:bg-orange-400  rounded-md">
                <li className=" flex flex-row py-1 ">
                <RiHome7Line/>
                </li>
                <h3 className="px-1   ">Home</h3>
              </div>
            </Link>
          </div>

          <div className=" p-2">
            <Link to="/about">
              <div className="flex flex-row  p-2 hover:bg-orange-400  rounded-md">
                <li className=" flex flex-row py-1 ">
                <FcAbout/>
                </li>
                <h3 className="px-1   ">About</h3>
              </div>
            </Link>
          </div>

          <div className=" p-2">
            <Link to="/contact">
              <div className="flex flex-row  p-2 hover:bg-orange-400  rounded-md">
                <li className=" flex flex-row py-1 ">
                <IoMdContact/>
                </li>
                <h3 className="px-1   ">Contact</h3>
              </div>
            </Link>
          </div>

          <div className=" p-2">
            <Link to="/instamart">
              <li className="px-2 p-2 hover:bg-orange-400  rounded-md">
                Instamart
              </li>
            </Link>
          </div>

          <div className=" p-2">
            <Link to="/cart">
              <div className="flex flex-row  p-2 hover:bg-orange-400  rounded-md">
                <li className=" flex flex-row py-2 ">
                  <BsFillCartCheckFill />
                </li>
                <h3 className="">{cartItems.length} </h3>
              </div>
            </Link>
          </div>
        </ul>
      </div>

      <div className="login-btn py-3 flex items-center justify-center px-2 sm:mt-0 mt-2 ">
        {/* <h1 className="mt-10 px-8 mb-8">{isOnline ? '✅' : '🔴'}</h1> */}

        <button
          className="hover:bg-orange-400  bg-gray-200 h-fit p-1 px-2  rounded-md"
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
