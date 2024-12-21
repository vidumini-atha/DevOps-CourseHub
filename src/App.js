// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Import Router, Routes, and Route
import Home from "./pages/Home";  // Import Home component
import LoginPage from "./pages/login-page/LoginPage";  // Import LoginPage component
import UserHome from "./pages/user/user-home";
import UserCourses from "./pages/user/user-courses";
import CourseContent from "./pages/user/courses/course-content";

const App = () => {
  return (
    <Router> {/* Wrap your whole app with Router */}
      <Routes> {/* Define your routes */}
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<LoginPage />} />  
        <Route path="/home" element={<UserHome/>} /> 
        <Route path="/courses" element={<UserCourses/>}/>
        <Route path="/:courseId" element={<CourseContent/>}/> 
      </Routes>
    </Router>
  );
};

export default App;
