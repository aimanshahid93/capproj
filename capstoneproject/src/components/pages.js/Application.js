import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import {useNavigate} from "react-router-dom";

function Application(){
    const navigate=useNavigate();
    const Login=()=>{
         navigate("/profile");
     }
    return(
    <div className="Application-container">
    <div className="heading-section">
    <h1>Applications</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <h3 className="Interview">Content available after completion of Placement Preparation</h3>
    </div>
    );

}
export default Application;