import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import {useNavigate} from "react-router-dom";

function Certificate(){
    const navigate=useNavigate();
   const Login=()=>{
        navigate("/profile");
    }
    return(
    <div className="certificate-container">
     <div className="heading-section">
    <h1>Certificate</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <div className="certificate">
    <h3 className="Certificate">Your Certificate is Not Yet Generated!</h3>
    </div>
    </div>
    );

}
export default Certificate;