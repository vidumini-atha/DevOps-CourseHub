import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  { display: "Home", url: "/" },
  { display: "About", url: "#about" },
  { display: "Courses", url: "#courses" },
/*   { display: "Blog", url: "#" }, */
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef();

  // Detect scroll position
  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); 
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu for mobile view
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
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

  return (
    <header className={`header ${isScrolled ? "shadow" : ""}`}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className="d-flex align-items-center gap-1">
              <i className="custom-icon"></i> CourseHUB
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
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
                          <button className="btn" onClick={handleLoginClick}>Log In</button>

            <div className="nav__right">
            
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +88 0123456789
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
