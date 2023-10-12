/*
### PARCEL ###
ver
* Created A Ser
* HMR = Hot MOdule Reloingad  ----Sarver
* File Watcher algorithm - C++
* Bundling
* MINIFY
+ Cleaning our code
* Dev  and Production Build
* Super Fast build algorithm
* Image Optimization
* Caching while development
* Compatibel with older version of browser
* HTTPS on dev
* port Number
* Consisting Hashing Algorithms
* Zero config
* Tree Shaking : Removeun wanted
* 
* 
* Transitive Dependencies

*/
import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Footer from "./components/Footer";
//Named import
import Header from "./components/Header";
import Cart from "./components/Cart";
// import { Error } from "./components/Error";

/*
 **********************************
 */
import UserContext from "./utils/UserContext";

/*
 **********************************
 */

import Body from "./components/Body";

import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import Basic from "./components/forms";

import { Provider } from "react-redux";
import store from "./utils/store";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

// import Insta from "./components/Insta";
// import Instamart from "./components/Instamart";

// React.createElement => Object =>HTML(DOM)

//React.Fragment
// JSX => React.createElement() => Object => HTML(DOM)
//JSK has only one parent

// Props-properties

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
// Upon on demand Loading -> upon render -> suspend loading ->





const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Prathamesh",
    email: "pratham@gmail.com",
  });

  return (
    // UserContext provider is basically for overridding in header,outlet,footer;

    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        {/* <Title/> */}
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      </UserContext.Provider>
    </Provider>
   

    /**
            header
                -logo
                -navbarItems(Right side)
                -Cart
            Body
                -Search bar
                -RestrauntList
                  -Restaurant Card(many cards)
                    -Image
                    Name
                    Rating
                    Cusines
            Footer
                -links
                -Copyright
                */
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement:<Error/>,
    children: [
      {
        path: "/about", //  parentPath/{path} => localhost:1244/about
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //  parentPath/{path} => localhost:1244/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      // {
      //     path:"/b",
      //     element:<Body
      //     user ={{
      //         name:"Nameste React",
      //         email:"prathamesh@gmail.com",
      //     }}/>,
      // },

      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      // {
      //     path:"/insta",
      //     element:(<Suspense fallback={<Shimmer/>}>
      //         <Insta/>
      //     </Suspense>
      //     ),
      // },
      {
        path: "/login",
        element: <Basic />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing the react element inside root
root.render(<RouterProvider router={appRouter} />);
