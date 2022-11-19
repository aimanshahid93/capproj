import {React,PureComponent} from 'react';
import {MdAccountCircle} from "react-icons/md";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';

const data = [
    {
      name: 'Sat',
      correct: 4000,
      wrong: 2400,
      total: 2400,
    },
    {
      name: 'Sun',
      correct: 3000,
      wrong: 1398,
      total: 2210,
    },
    {
      name: 'Mon',
      correct: 2000,
      wrong: 9800,
      total: 2290,
    },
    {
      name: 'Tue',
      correct: 2780,
      wrong: 3908,
      total: 2000,
    },
    {
      name: 'Wed',
      correct: 1890,
      wrong: 4800,
      total: 2181,
    },
    {
      name: 'Thurs',
      correct: 2390,
      wrong: 3800,
      total: 2500,
    },
    {
      name: 'Fri',
      correct: 3490,
      wrong: 4300,
      total: 2100,
    },
  ];

function Dashboard(){
  const navigate=useNavigate();
   const Login=()=>{
        navigate("/profile");
    }
    return(
    <div className="Dashboard-container">
    <div className="heading-section">
    <h1>Dashboard</h1>
    <MdAccountCircle onClick={()=>Login()} className="Login-logo"/>
    </div>
    <h3 className='performance'>Overview</h3>
    <div className="student-progress">
    <p className='progress1'>Completion
    <p>60%/100%</p>
    </p>
    <ProgressBar now={60} />
    </div>
    <h3 className='performance2'>Activities</h3>  
    <div className="Activities">
    <div className="Webkata">
    <h5>Webkata</h5>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={150}
          data={data}
          margin={{
            top: 55,
            right: 30,
            left: 5,
            bottom: 2,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wrong" fill="#8884d8" />
          <Bar dataKey="correct" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>  
    </div> 
    <div className="Codekata">
    <h5>Codekata</h5>
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={800}
          height={150}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 5,
            bottom: 2,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="wrong" fill="#8884d8" />
          <Bar dataKey="correct" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>    
    </div> 
    </div>
    </div>
    );

}
export default Dashboard;