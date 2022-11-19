import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function Mockinterview(){
   const navigate=useNavigate();
   const Login=()=>{
    navigate("/profile");
    }
    return(
    <div className="Mock-container">
    <div className="heading-section">
    <h1>Mock Interviews</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <div className="Mock">
    <Table striped>
      <thead>
        <tr>
          <th>Mock Interview Round</th>
          <th>Interview Date</th>
          <th>Overall score</th>
          <th>Recording URL</th>
          <th>Comments</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>25/7/2022</td>
          <td>2.9</td>
          <td src="https://www.youtube.com/embed/dn-u6pUal0U" alt="video">https://www.youtube.com/embed/dn-u6pUal0U</td>
          <td>Average</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>2</td>
          <td>25/8/2022</td>
          <td>3.5</td>
          <td src="https://www.youtube.com/embed/dn-u6pUal0U" alt="video">https://www.youtube.com/embed/dn-u6pUal0U</td>
          <td>Good performance</td>
          <td>better</td>
        </tr>
        <tr>
          <td>3</td>
          <td>25/9/2022</td>
          <td>4</td>
          <td src="https://www.youtube.com/embed/dn-u6pUal0U" alt="video">https://www.youtube.com/embed/dn-u6pUal0U</td>
          <td>can do better</td>
          <td>Good</td>
          
        </tr>
        
        
      </tbody>
    </Table>
    </div>
    </div>
    );

}
export default Mockinterview;