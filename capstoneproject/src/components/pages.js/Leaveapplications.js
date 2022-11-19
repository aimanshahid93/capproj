import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function Leaveapplication(){
  const navigate=useNavigate();
  const Login=()=>{
       navigate("/profile");
   }
    return(
    <div className="Leave-container">
    <div className="heading-section">
    <h1>Leave Applications</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <div className="Mock">
    <section className='addleave'>
        
    </section>
    <Table striped>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Approved</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>22/7/2022</td>
          <td>25/7/2022</td>
          <td>Yes</td>
          <td>Having Viral fever,i request you to grant me leave</td>
          
        </tr>
        <tr>
          <td>2/9/2022</td>
          <td>5/9/2022</td>
          <td>No</td>
          <td>I have to attend a family function</td>
        </tr>   
      </tbody>
    </Table>
    </div>
    </div>
    );

}
export default Leaveapplication;