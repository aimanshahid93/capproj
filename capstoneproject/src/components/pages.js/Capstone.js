import React from 'react';
import {MdAccountCircle} from "react-icons/md";
import {useState} from "react";
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";


function Capstone(){
    const [show,setShow]=useState(!true);
    const navigate=useNavigate();
    const Login=()=>{
         navigate("/profile");
     }
    return(
    <div className="class-container">
     <div className="heading-section">
    <h1>Task Submissions</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <div className="capstone-body">
    <div className="capstone-head">
    <h3>Capstone</h3>
    <p>(B38WeekDay English)</p>
    </div>
    <div className="capstone-foot">
    <p>Yet to be graded</p>
    <Button onClick={()=>setShow(!show)}>Task</Button>
    {show?<h5>Description :
To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.

Task Title: Zen class Event Management for students

Any specifications on the design?

Front-end: Reactjs
Back-end: Nodejs
Database: MongoDB
Requirements:

The project should achieve the CODE QUALITY
Use fonts/icons if it’s required in the design.
The use of various charts is required in the design.
The use of bootstrap/ material CSS is required in the design
How do I submit my work?

Push all your work files to GitHub in two different repositories as given below
Front-end repo name project-name-frontend.
Back-end repo name project-name-backend.
Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Heroku(https://www.heroku.com/).
Any basic hints/links/reference sites to solve?

https://getbootstrap.com/docs/4.4/getting-started/introduction/

https://www.chartjs.org/

https://jwt.io/introduction/

https://react-bootstrap.github.io/

https://materializecss.com/

https://tailwindcss.com/

https://expressjs.com/

Terms and Conditions?

You agree to not share this confidential document with anyone. 
You agree to open-source your code (it may even look good on your profile!). Do not mention our company’s name anywhere in the code.
We will never use your source code under any circumstances for any commercial purposes; this is just a basic assessment task.
For capstone, the use case has to be identified by the developer.
NOTE: Any violation of Terms and conditions is strictly prohibited. You are bound to adhere to it.</h5>:null}
</div>
    </div>
    </div>
    );

}
export default Capstone;