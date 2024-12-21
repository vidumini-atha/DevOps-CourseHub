import React, { Fragment, useState, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import NewHeader from "../../components/Header/new-header";
import CourseDropDown from "../../components/Header/courseDropDown";
import Courses from "../../components/Courses-section/Courses";
import { Container, Row, Col } from "reactstrap";
import geeksImage from './GeeksforGeeks.png';

const IconStyle = {
  display: "inline-block",
  width: "120px",
  height: "30px",
  backgroundImage: `url(${geeksImage})`,
  backgroundSize: "cover",
};


const UserCourses = () => {
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
      <br></br><br></br><br></br>
      <CourseDropDown/>
      <Courses/>
      <Container>
        <h4 className="title" style={{fontSize:"14px", textAlign:"center", lineHeight:"60px", color:"#5f5858"
    }}>Powered by Resources</h4>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
            <i className="geeks-icon" style={IconStyle}></i>

            </h3>
          </Col>
          </Row>
         </Container>
      
         <Footer/>
    </Fragment>
  );
};

export default UserCourses;
