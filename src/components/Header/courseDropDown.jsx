import React from "react";
import "./courseDropDown.css";

const CourseDropDown = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item dropdown">
          <a href="/Data-Science" className="dropdown-toggle">
            Data Science
          </a>
          <ul className="dropdown-menu">
            <li><a href="/Deep-Learning">Deep Learning</a></li>
            <li><a href="/Machine-Learning">Machine Learning</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/Data-Structures">Data Structures</a>
        </li>
        <li className="nav-item dropdown">
          <a href="/DevOps" className="dropdown-toggle">
            DevOps
          </a>
          <ul className="dropdown-menu">
            <li><a href="/GIT">GIT</a></li>
            <li><a href="/AWS">AWS</a></li>
            <li><a href="/Docker">Docker</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/Design-Patterns">Software Design Patterns</a>
        </li>
        <li className="nav-item dropdown">
          <a href="/Databases" className="dropdown-toggle">
            Databases
          </a>
          <ul className="dropdown-menu">
            <li><a href="/SQL">SQL</a></li>
            <li><a href="/MongoDB">MongoDB</a></li>
            <li><a href="/DBMS">DBMS</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/Algorithms">Algorithms</a>
        </li>
      </ul>
    </nav>
  );
};

export default CourseDropDown;
