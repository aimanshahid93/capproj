import React from 'react';
import {MdAccountCircle,} from "react-icons/md";
import {BsPlus} from "react-icons/bs";
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import {useNavigate} from "react-router-dom";


function Queries(){
    const [show,setShow]=useState(!true);
    const navigate=useNavigate();
    const Login=()=>{
         navigate("/profile");
     }
    return(
    <div className="class-container">
     <div className="heading-section">
     <h1>My Queries</h1>
     <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
     </div>
     <Button className='query-button'onClick={()=>setShow(!show)}><BsPlus/>Create Query</Button>
     <div className="add-query">
     {show?<div className='Query'>
     <div className="query-body">
     <div className="query-head">
     <h5>Action Pending!!!</h5>
     <CloseButton onClick={()=>setShow(!show)}></CloseButton>
     </div>
     <div className='query-middle'>
     <p>You have a resolved query and you cannot create a new query unless you mark it as “closed”</p>
     <button className='button1'>Resolved</button>➡️<button className='button2'>closed</button>
     <p>else, you have a reply from a mentor to one of your open query. please reply and come back.</p>
     </div>
     <div className='query-foot'>
     <Button onClick={()=>setShow(!show)}>⬅️Go Back</Button>
     </div>
     </div>
     </div>:null}
     </div>
    </div>
    );

}
export default Queries;