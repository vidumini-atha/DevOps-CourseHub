import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import { useNavigate } from "react-router-dom";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp- for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "UI/UX BootCamp for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];



const Courses = () => {
  const navigate =useNavigate();

  const handleSeeall = () => {
    navigate("/courses");
    window.scrollTo(0, 0);
  };
  return (
    <section id='courses'>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p className="coursePara">
                Explore our top courses that help learners gain new skills
                and advance their careers. With expert-led instruction and
                hands-on learning, these courses are perfect for anyone looking to
                grow professionally or personally.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" onClick={handleSeeall}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
