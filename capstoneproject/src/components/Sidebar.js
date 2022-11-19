import React from 'react';
import {motion,AnimatePresence} from 'framer-motion';
import{ MdAccountBox,MdBallot,MdAssignment,MdContactPhone,MdAddChart,MdBadge} from "react-icons/md"
import {FaAddressBook,FaNewspaper} from "react-icons/fa";
import {TbIdBadge2} from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const routes=[
    {
        path:"/",
        name:"Class",
        icon:<MdAccountBox />
    },
    {
        path:"/dashboard",
        name:"Dashboard",
        icon:<MdBallot/>
    },
    {
        path:"/tasks",
        name:"Tasks",
        icon:<MdAssignment />
    },
    {
        path:"/webcode",
        name:"Webcode",
        icon:<MdAssignment />
    },
    {
        path:"/capstone",
        name:"Capstone",
        icon:<MdAssignment />
    },
    {
        path:"/queries",
        name:"Queries",
        icon:<FaAddressBook/>
    },
    {
        path:"/requirements",
        name:"Requirements",
        icon:<MdAddChart />
    },
    {
        path:"/applications",
        name:"Applications",
        icon:<MdContactPhone />
    },
    {
        path:"/interviewtasks",
        name:"InterviewTasks",
        icon:<MdBallot/>
    },
    {
        path:"/leaveapplications",
        name:"Leaveapplication",
        icon:<MdBallot/>
    },
    {
        path:"/mockinterview",
        name:"Mockinterview",
        icon:<MdBallot/>
    },
    {
        path:"/certificate",
        name:"Certificate",
        icon:<MdBadge/>
    },
    {
        path:"/testimonial",
        name:"Testimonial",
        icon:<TbIdBadge2/>
    },
    {
        path:"/leaderboard",
        name:"Leaderboard",
        icon:<TbIdBadge2/>
    },
    {
        path:"/syllabus",
        name:"Syllabus",
        icon:<FaNewspaper/>
    },

];

const Sidebar=({children})=>{
    const[isOpen,setIsOpen]=useState(false)
    const toggle = () => setIsOpen(!isOpen);
   return(
   <div className='main-container'> 
    <motion.div animate={{width: isOpen ?"200px":"100px"}} className='sidebar'>
    <div className='top_section'>
   <img style={{width:"80px"}} src="data:image/png;base64,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" alt="logo" />
   {isOpen && <h1 className='logo'>student</h1>}
    </div>
      <section className='routes'>
       {routes.map((route)=>(
         <NavLink to={route.path} key={route.name} className="link">
           <div className='icon' onClick={toggle}>{route.icon}</div>
           {isOpen && <div className="link_text">{route.name}</div>}
         </NavLink>  
       ))}
       </section>
       </motion.div>  
       <main>{children}</main> 
   </div>
   
       );
   };
   
   export default  Sidebar;