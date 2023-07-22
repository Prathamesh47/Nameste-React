import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionComponent from "./Profile";
import {Component} from "react";
import UserContext from "../utils/UserContext";

// const About = () => {
//     return (
//         <div>
//             <h1>About Us Page</h1>
//             <p> 
//                 This is the Nameste React Live Course Chapter 07 - Finding the path 
//             </p>
//             <Profile name={"PrathameshClass"}/>
//             <ProfileFunctionComponent name={"Prathamesh"}/>
//         </div>
//     )
// } 
class About extends Component{
    constructor(props)
    {
        super(props);
        console.log(" Parent - constructor");
    }
    componentDidMount()
    {
        // Best place to make an Api call to 
        console.log(" Parent - componentDidMount");
    }
    render(){
        console.log("Parent - render");
        return (
            <div>
                <h1>About Us Page</h1>

                <UserContext.Consumer>
                    {({user}) => <h4 className="font-bold text-xl p-10">{user.name} - {user.email}</h4>}
                </UserContext.Consumer>
                <p> 
                    This is the Nameste React Live Course Chapter 07 - Finding the path 
                </p>
                <Profile name={"First Child"}/>
                <Profile name={"Second Child"}/>
                <ProfileFunctionComponent name={"Prathamesh"}/>
            </div>
        )
    }
    
}

export default About;

/**
 * 
 * Parent Constructor
 * Parent render
 *      First child Constructor
 *      First child render
 * 
 *      Dom updated the child 
 * 
 *      Second child Constructor
 *      Second child render
 *  
 *      First child componentDidMount
 *      Second child componentDidMount
 * Parent componentDidMount
 * 
 */