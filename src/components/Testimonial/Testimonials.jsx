import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                      "I absolutely loved the courses offered!
                      The content was engaging and well-structured. I was able to learn new skills at my own pace."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">JMK Ariyarathna</h6>
                        <p>Kurunegala,Sri Lanka</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Amazing Support Team
                      </h6>
                      <p>
                      "The support team was amazing! Whenever I had questions, they responded quickly and helped me get back on track.
                      I feel more confident in my skills now."
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">VK Menon</h6>
                        <p>Kerala, India</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Valuable Certificate
                      </h6>
                      <p>
                      "Such a great experience! The course content was thorough, and I was able to apply
                      what I learned immediately. Certification added so much value to my resume."" 
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
