import React, { Fragment, useState, useEffect } from "react";
import Courses from "../../components/Courses-section/Courses";
import Company from "../../components/Company-section/Company";
import Footer from "../../components/Footer/Footer";
import NewHeader from "../../components/Header/new-header";
import EnrolledCourses from "./courses/EnrolledCourses";


const UserHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
   

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <NewHeader isScrolled={isScrolled}/>
      <br></br><br></br>
      <EnrolledCourses/>
      <Courses/>
      <Company/>
      <Footer/>
    </Fragment>
  );
};

export default UserHome;
