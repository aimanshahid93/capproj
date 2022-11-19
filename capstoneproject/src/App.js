import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Application from './components/pages.js/Application';
import Capstone from './components/pages.js/Capstone';
import Certificate from './components/pages.js/Certificate';
import Class from './components/pages.js/Class';
import InterviewTasks from './components/pages.js/InterviewTasks';
import Leaderboard from './components/pages.js/Leaderboard';
import Leaveapplication from './components/pages.js/Leaveapplications';
import Mockinterview from './components/pages.js/MockInterview';
import Queries from './components/pages.js/Queries';
import Requirements from './components/pages.js/Requirements';
import Syllabus from './components/pages.js/Syllabus';
import Tasks from './components/pages.js/Tasks';
import Testimonial from './components/pages.js/Testimonial';
import Webcode from './components/pages.js/Webcode';
import Dashboard from './components/pages.js/Dashboard';
import Error from './components/pages.js/Error page';
import Login from './components/Login';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
     
      <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Class/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/webcode" element={<Webcode />} />
          <Route path="/capstone" element={<Capstone />} />
          <Route path="/queries" element={<Queries/>} />
          <Route path="/requirements" element={<Requirements />} />
          <Route path="/applications" element={<Application />} />
          <Route path="/interviewtasks" element={<InterviewTasks />} />
          <Route path="/leaveapplications" element={<Leaveapplication />} />
          <Route path="/mockinterview" element={<Mockinterview/>} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/syllabus" element={<Syllabus />} />
          <Route path="*" element={<Error />} />
          <Route path="/profile" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
        </Routes> 
      </Sidebar>
    </Router>

    </div>
  );
}

export default App;
