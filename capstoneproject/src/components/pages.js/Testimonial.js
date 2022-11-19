import React from 'react';
import {MdAccountCircle,} from "react-icons/md";
import {useNavigate} from "react-router-dom";

function Testimonial(){
    const navigate=useNavigate();
    const Login=()=>{
    navigate("/profile");
    }
    return(
    <div className="Testimonial-container">
     <div className="heading-section">
     <h1>Testimonial</h1>
     <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
     </div>
     <h5>You Have Not submitted Any Testimonials Yet</h5>
     
    </div>
    );

}
export default Testimonial;