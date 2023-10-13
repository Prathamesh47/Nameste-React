import { useState } from "react";
import instamart from "../assets/instamart.png"

const Section = ({title ,description, isVisible, setIsVisible}) => {
    // const [isVisible,setIsVisible] =useState(false);
    return(
        <div className="border border-black p-2 m-2 "> 
          <h3 className="font-bold text-xl">{title}</h3>
          {
            isVisible ? (
                <button onClick={()=>setIsVisible(false)} className="cursor-pointer underline m-2 p-2">Hide</button>
            ):(
            <button onClick={()=>setIsVisible(true)} className="cursor-pointer underline m-2 p-2">Show</button>
            )
          }
          
          

          {isVisible && <p>{description}</p>}

        </div>
    )
}



const Instamart = () => {
    // const [visibleSection, setVisibleSection] =useState("about");
    return(
        <>
        <div className="container h-screen">
      <div className="flex flex-col justify-center items-center gap-10 p-5">
        <span className='text-blue-dark font-bold text-4xl'>Coming Soon ...</span>
        <img className="w-[300px]" alt="instamert" src= {instamart} />
      </div>
    </div>
        {/* <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section 
            title={"About Instamart"}
            description = {"Instamart is a chain of online convenience stores. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience s Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs."}

             isVisible={visibleSection==="about"}
             setIsVisible={()=>{
                setVisibleSection("about")
             }
            }
            />
             <Section 
            title={"Team Instamart"}
            description = {"Instamart Timing: 7 am – 1 am Daily Customer Care:– 080-6746 6666  Email:- support@swiggy.in"}
             isVisible={visibleSection==="team"}
             setIsVisible={()=>{
                setVisibleSection("team")
            }
                }
             />
             <Section 
            title={"Careers"}
            description = {"You can access Instamart in the Swiggy app by clicking on the Instamart tile on the home page of the Swiggy app.Instamart aims to fulfill the unmet grocery needs of its urban customer, at even the odd times of the day."}
             isVisible={visibleSection==="careers"}
             setIsVisible={()=>
                {
                    setVisibleSection("careers")
                }}
             />
        </div> */}
        </>
    )
}

export default Instamart;