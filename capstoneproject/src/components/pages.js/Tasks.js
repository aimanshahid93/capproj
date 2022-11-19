import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import {useState} from "react";
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

function Tasks(){
    const [show,setShow]=useState(!true);
    const navigate=useNavigate();
    const Login=()=>{
         navigate("/profile");
     }
    return(
    <div className="Task-container">
     <div className="heading-section">
     <h1>Tasks</h1>
     <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
     </div>
    <div className="task-body">
    <div className="task-head">
    <h3>TASK 1</h3>
    <p>(B38WeekDay English)</p>
    </div>
    <div className="task-foot">
    <p>Yet to be graded</p>
    <Button onClick={()=>setShow(!show)}>Task</Button>
    {show?<h5>Write tha basic tags and about javascript in detail with examples</h5>:null}
    </div> 
    </div>
    </div>
    );

}
export default Tasks;