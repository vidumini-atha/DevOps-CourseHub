import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Our courses are designed for quick learning, allowing you to master skills at your own pace while achieving measurable progress in less time.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Enjoy round-the-clock support from our dedicated team, ensuring you have assistance whenever you need it during your learning journey.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Our courses provide recognized certifications that enhance your professional credibility and help you stand out in your field.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p >{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
