import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";
import { auth } from "../firebase";

const navLinks = [
  { display: "Home", url: "/home" },
  {display: "Courses",url: "/courses" },
];

const NewHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const menuRef = useRef();
  const handleNavClick = (e) => {
    const target = e.target.getAttribute("href");
    if (target.startsWith("#")) {
      const element = document.querySelector(target);
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    } else {
      window.location.href = target;}
  };
  

  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email.split('@')[0]);
      } else {
        setUserEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

 

  return (
    <header className={`header ${isScrolled ? "shadow" : ""}`}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
        
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="custom-icon"></i> CourseHub
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
          <div className="nav__menu" ref={menuRef}>
          <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url} onClick={handleNavClick}>
                      {item.display}
                    </a>
                  </li>
                ))}
              </ul>
</div>

            {userEmail ? (
              <span>{userEmail}</span>
            ) : (
              <button className="btn" onClick={handleLoginClick}>Log In</button>
            )}
            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
           
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
   
    </header>
  );
};

export default NewHeader;


