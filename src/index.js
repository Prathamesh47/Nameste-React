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
import React,{lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
//Default Import
import Footer from "./components/Footer";
//Named import
import Header,  {Title} from "./components/Header";

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
import { createBrowserRouter , RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Profile from "./components/Profile";
import Shimmer from "./components/shimmer";
import Basic from "./components/forms";

import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart.js";
// import Insta from "./components/Insta";
// import Instamart from "./components/Instamart";


    // React.createElement => Object =>HTML(DOM)

   
    //React.Fragment
    // JSX => React.createElement() => Object => HTML(DOM)
    //JSK has only one parent


    // Props-properties

    const Instamart = lazy(()=>import("./components/Instamart"));
    const About = lazy (()=>import("./components/About"))
    // Upon on demand Loading -> upon render -> suspend loading ->

    const AppLayout = () =>{

        const [user,setUser] = useState({
            name:"Prathamesh",
            email:"pratham@gmail.com",
        })

        return (
               // UserContext provider is basically for overridding in header,outlet,footer;

            <Provider store = {store}>
              <UserContext.Provider value={{
                user : user,
                setUser:setUser,
              }}>
              {/* <Title/> */}
              <Header/>
              <Outlet/>
              <Footer/>
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
            
            path:"/",
            element:<AppLayout/>,
            // errorElement:<Error/>,
            children:[
            {
                path:"/about",    //  parentPath/{path} => localhost:1244/about
                element:<Suspense>
                    <About/>
                    </Suspense>,
                children:[
                    {
                        path:"profile",  //  parentPath/{path} => localhost:1244/about/profile
                        element:<Profile/>,
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/",
                element:<Body/> 
                
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
               
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
               
                path:"/instamart",
                element:(<Suspense fallback={<Shimmer/>}>
                <Instamart/>
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
                path:'/login',
                element:<Basic/>
            },{
                path:'/cart',
                element:<Cart/>
            }
        ]
        },
        
    ])
    
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // Passing the react element inside root
    root.render(<RouterProvider router={appRouter}/>);

     // {
    //   "type": "restaurant",
    //   "data": {
    //     "type": "F",
    //     "id": "124105",
    //     "name": "Cafe Pizza Bites",
    //     "uuid": "aaa0e30a-da44-43e5-a76d-bbe8d6f66b3b",
    //     "city": "6",
    //     "area": "Katraj",
    //     "totalRatingsString": "20+ ratings",
    //     "cloudinaryImageId": "drvi2lg8y7pybzlir1x4",
    //     "cuisines": [
    //       "Pizzas",
    //       "Street Food"
    //     ],
    //     "tags": [
          
    //     ],
    //     "costForTwo": 30000,
    //     "costForTwoString": "₹300 FOR TWO",
    //     "deliveryTime": 32,
    //     "minDeliveryTime": 32,
    //     "maxDeliveryTime": 32,
    //     "slaString": "32 MINS",
    //     "lastMileTravel": 0.699999988079071,
    //     "slugs": {
    //       "restaurant": "cafe-pizza-bites-katraj-vam",
    //       "city": "pune"
    //     },
    //     "cityState": "6",
    //     "address": "Sneha Niwas shop no 1,Ganesh Haussing Soc Bharti vidyapith katraj",
    //     "locality": "Ganesh Housing Society",
    //     "parentId": 53917,
    //     "unserviceable": false,
    //     "veg": false,
    //     "select": false,
    //     "favorite": false,
    //     "tradeCampaignHeaders": [
          
    //     ],
    //     "aggregatedDiscountInfo": {
    //       "header": "FREE DELIVERY",
    //       "shortDescriptionList": [
    //         {
    //           "meta": "FREE DELIVERY",
    //           "discountType": "FREE_DELIVERY",
    //           "operationType": "RESTAURANT"
    //         },
    //         {
    //           "meta": "50% off on all orders",
    //           "discountType": "Percentage",
    //           "operationType": "RESTAURANT"
    //         }
    //       ],
    //       "descriptionList": [
    //         {
    //           "meta": "FREE DELIVERY",
    //           "discountType": "FREE_DELIVERY",
    //           "operationType": "RESTAURANT"
    //         },
    //         {
    //           "meta": "50% off on all orders",
    //           "discountType": "Percentage",
    //           "operationType": "RESTAURANT"
    //         }
    //       ],
    //       "subHeader": "",
    //       "headerType": 0,
    //       "superFreedel": ""
    //     },
    //     "aggregatedDiscountInfoV2": {
    //       "header": "50% OFF",
    //       "shortDescriptionList": [
    //         {
    //           "meta": "Free Delivery",
    //           "discountType": "FREE_DELIVERY",
    //           "operationType": "RESTAURANT"
    //         }
    //       ],
    //       "descriptionList": [
    //         {
    //           "meta": "FREE DELIVERY",
    //           "discountType": "FREE_DELIVERY",
    //           "operationType": "RESTAURANT"
    //         },
    //         {
    //           "meta": "50% off on all orders",
    //           "discountType": "Percentage",
    //           "operationType": "RESTAURANT"
    //         }
    //       ],
    //       "subHeader": "",
    //       "headerType": 0,
    //       "superFreedel": ""
    //     },
    //     "chain": [
          
    //     ],
    //     "feeDetails": {
    //       "fees": [
            
    //       ],
    //       "totalFees": 0,
    //       "message": "",
    //       "title": "",
    //       "amount": "",
    //       "icon": ""
    //     },
    //     "availability": {
    //       "opened": true,
    //       "nextOpenMessage": "",
    //       "nextCloseMessage": ""
    //     },
    //     "longDistanceEnabled": 0,
    //     "rainMode": "NONE",
    //     "thirdPartyAddress": false,
    //     "thirdPartyVendor": "",
    //     "adTrackingID": "",
    //     "badges": {
    //       "imageBased": [
            
    //       ],
    //       "textBased": [
            
    //       ],
    //       "textExtendedBadges": [
            
    //       ]
    //     },
    //     "lastMileTravelString": "0.6 kms",
    //     "hasSurge": false,
    //     "sla": {
    //       "restaurantId": "124105",
    //       "deliveryTime": 32,
    //       "minDeliveryTime": 32,
    //       "maxDeliveryTime": 32,
    //       "lastMileTravel": 0.699999988079071,
    //       "lastMileDistance": 0,
    //       "serviceability": "SERVICEABLE",
    //       "rainMode": "NONE",
    //       "longDistance": "NOT_LONG_DISTANCE",
    //       "preferentialService": false,
    //       "iconType": "EMPTY"
    //     },
    //     "promoted": false,
    //     "avgRating": "4.1",
    //     "totalRatings": 20,
    //     "new": false
    //   },
    //   "subtype": "basic"
    // }