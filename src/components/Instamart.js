import { useState } from "react";
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
    const [visibleSection, setVisibleSection] =useState("about");
    return(
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section 
            title={"About Instamart"}
            description = {"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
             isVisible={visibleSection==="about"}
             setIsVisible={()=>{
                setVisibleSection("about")
             }
            }
            />
             <Section 
            title={"Team Instamart"}
            description = {"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
             isVisible={visibleSection==="team"}
             setIsVisible={()=>{
                setVisibleSection("team")
            }
                }
             />
             <Section 
            title={"Careers"}
            description = {"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}
             isVisible={visibleSection==="careers"}
             setIsVisible={()=>
                {
                    setVisibleSection("careers")
                }}
             />
        </div>
    )
}

export default Instamart;