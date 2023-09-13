import { useEffect, useState } from "react";

const Profile = (props)=>
{
    const[count, setCount]=useState(0);
    // const[count2]=useState(0);
    useEffect(()=>{
        // Api call
        console.log("useEffect");
    })
    console.log("Child - render");
    return ( 
        <div>
        <h1>Profile Component</h1>
        <h2>Name: {props.name}</h2>
        <h2>Count: {count}</h2>
        
        <button onClick={()=> setCount(1)}>Count</button>
        
        </div>
    )
}

export default Profile;