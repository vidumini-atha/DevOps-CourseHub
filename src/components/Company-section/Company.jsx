import React from "react";
import { Container, Row, Col } from "reactstrap";


const Company = () => {
  return (
    <section>
      <Container>
        <h4 className="title" style={{fontSize:"14px", textAlign:"center", lineHeight:"60px", color:"#5f5858"
    }}>Powered by Resources</h4>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-copyright-line"></i> Canva
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-pinterest-line"></i> Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-pixelfed-line"></i> pexels
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-video-chat-fill"></i> invideo
            </h3>
          </Col>


          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-google-fill"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
