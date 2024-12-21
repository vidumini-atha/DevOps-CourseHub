import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero-section"> 
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-40 hero__title">
                Anytime Anywhere <br />Learn on your Suitable Schedule
              </h2>
              <p className="mt-4">
                Explore our wide range of courses crafted to match your unique interests and schedule. Whether you're looking to master a new skill or enhance your knowledge, our flexible learning options empower you to grow at your own pace.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col  lg="6" md="6">
           {/*  <img src={heroImg} alt="" className="w-100 hero__img" /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
