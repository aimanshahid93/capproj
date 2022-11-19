import React from 'react';
import {MdAccountCircle} from "react-icons/md"
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";

function Leaderboard(){
  const navigate=useNavigate();
  const Login=()=>{
       navigate("/profile");
   }
    return(
        <div className='Leadboard-container'>
        <div className="heading-section">
         <h1>Leaderboard</h1>
         <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
         </div>
         <div className="Leaderboard-body">
         <div className="Leaderboard-head">
         <p>Competition is a good thing; it forces us to do our best.</p>
         <img src="https://png.pngtree.com/png-clipart/20200401/original/pngtree-hand-drawn-cartoon-trophy-teamwork-illustration-png-image_5341217.jpg" alt="logo" className='trophy'/>
         </div>
         </div>
         <div className="Leaderboard-foot">
         <Table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Batch</th>
          <th>Learning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>33</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>25</td>
        </tr>
        <tr>
          <td>3</td>
          <td>john</td>
          <td>Gibbs</td>
          <td>22</td>
        </tr>
      </tbody>
    </Table>
    
         </div>
         </div>
         );
     }
    
 

   
export default Leaderboard;