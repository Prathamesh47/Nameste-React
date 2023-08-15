
/*

        This Section is Basically for practice not in use in project


*/





import { useState } from "react";

const Section=({title,dis ,isVisible,setIsVisible})=>{
    // const [isVisible,setIsVisible]=useState(false);
    return(
        <div className="border border-black m-2 px-2">
            <h1 className="font-bold px-2 m-2 underline">{title}</h1>
            
            

            {isVisible ? <button  onClick={()=>{
                setIsVisible(false)
            }}>Hide</button> : 
            <button  onClick={()=>{
                setIsVisible(true)
            }}>Show</button>
        }
            
            {isVisible && <p>{dis}</p> }
        </div>
    )
}

const Insta = ()=>{
    const [visibleSection,setVisibleSection]=useState("Moto")
    return(
        <div>
            <h1 className="font-bold px-2 m-2 text-3xl ">Insta</h1>
            <Section title="Moto"
                     dis="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper"
                     isVisible={visibleSection==="Moto"}
                     setIsVisible={()=>{
                        setVisibleSection("Moto")
                     }}
            />
            <Section title="Samsung"
                     dis="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper"
                     isVisible={visibleSection==="Samsung"}
                     setIsVisible={()=>{
                        setVisibleSection("Samsung")
                     }}
            />
            <Section title="Apple"
                     dis="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aper"
                     isVisible={visibleSection==="Apple"}
                     setIsVisible={()=>{
                        setVisibleSection("Apple")
                     }}
            />
            
        </div>
    )
}

export default Insta;