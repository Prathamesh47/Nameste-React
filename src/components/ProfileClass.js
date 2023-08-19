import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);
        // Create State
        this.state = {
            
            userInfo:{
                login :"Dummy Name",
                id : "Dummy location",
            }
            
        };
        console.log("Child - Constructor"+this.props.name);
    }

    async componentDidMount(){
        // API Calls
        // console.log("Child - componentDidMount"+this.props.name);
        const data = await fetch("https://api.github.com/users/Prathamesh47");
        const json = await data.json();
        this.setState ({
            userInfo : json,
        });
        console.log("Child - componentDidMount"+this.props.name);

    }
    componentDidMount(){
        this.timer=setInterval(() => {
            console.log("Nameste React OP");
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log("Component Did Update");
    }
    componentWillUnmount()
    {
        clearInterval(this.timer);
        console.log("componentWillUnmount");
    }

    render(){
        
        const {count}=this.state;
        console.log("Child render");
        return (
        <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url}></img>
        <h2>Login: {this.state.userInfo.login}</h2>
        
        <h2>Id: {this.state.userInfo.id}</h2>
        <h2>Count:{count}</h2>
        
        </div>
        
        );
    }
}

export default Profile;

/**
 * 
 * Parent constructor 
 * parent render
 * child constructor
 * child render
 * 
 * Dom is updated 
 * json is logged in console
 * child componentDidMount
 * 
 * parent componentDidMount
 * 
 * 
 */