import React from 'react';
import {MdAccountCircle} from 'react-icons/md';
import {useNavigate} from "react-router-dom";

function Syllabus(){
    const navigate=useNavigate();
    const Login=()=>{
         navigate("/profile");
     }
    return(
   <div className='syllabus-container'>
   <div className="heading-section">
    <h1>Syllabus</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <div className="syllabus-body">
    <div className="syllabus-head">
    <p>course</p>
    <p>Syllabus</p>
    </div>
    <div className="syllabus-foot">
    <p>FSD MERN</p>
    <a onClick="https://www.guvi.in/blog/full-stack-developer-syllabus/">DOWNLOAD</a>
    </div>
    </div>
    </div>
    );
}
export default Syllabus;