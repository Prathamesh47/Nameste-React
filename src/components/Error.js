import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    console.log(err);
    const{status,statusText}=err;
    return(
        <div>
            <h1>Opps!!</h1>
            <h2>Something error Occur!!</h2>
            <h2>{err.status+" : "+ err.statusText}</h2>
        </div>
        
    )
}
export default Error;