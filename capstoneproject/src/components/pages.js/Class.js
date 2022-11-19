import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import {useNavigate} from "react-router-dom";

function Class(){
   const navigate=useNavigate();
   const Login=()=>{
        navigate("/profile");
    }
    return(
    <div className="class-container">
    <div className="heading-section">
    <h1>Class</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <div className="Schedule">
    <h3 className='scheduleh3'>Join The Class On Time!!</h3>
    </div>
    <div className="About">
    <div className="About-head">
    <h5>No session title available</h5>
    <p>Class schedule is not updated</p>
    </div>
    <div className="About-body">
     <h5>Contents:</h5> 
     <p>No content available</p>
    </div>
     <div className="About-foot">
     <h5>Pre-read:</h5> 
     <p>No preread available</p>
     </div>
    </div>
    </div>
    );

}
export default Class;