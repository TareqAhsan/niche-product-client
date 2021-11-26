import React from "react";
import Fade from "react-reveal/Fade";
import { Col, Container, Row } from "react-bootstrap";

const Keepintouch = () => {
  return (
    <div className="py-5" style={{ background: "#DBF0FE" }}>
      <Container>
        <Row xs={1} md={2} lg={2} className="g-4">
          <Col>
            <img
              src="https://i.ibb.co/9hgjzZh/drake-s-takes-v-Kn-RYW-mtek-unsplash.jpg"
              className="img-fluid"
              alt=""
            />
          </Col>
          <Col
            className="d-flex align-items-center"
            style={{ textAlign: "left" }}
          >
            <div>
              <Fade right>
                <h2 className="display-5">LET’S KEEP IN TOUCH</h2>
      
              <p className="fs-4">
                We’re very active on our social media platforms. Like and follow
                to stay updated with us.
              </p>
              <div>
                <i
                  className="fab fa-facebook fa-2x text-primary"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fab fa-youtube fa-2x text-danger m-2"
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ color: "#8a3ab9", cursor: "pointer" }}
                ></i>
              </div>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Keepintouch;
