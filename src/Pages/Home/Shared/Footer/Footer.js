import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-black text-white py-3">
      <Container className="py-5">
        <Row xs={1} md={2} lg={4}>
          <Col style={{ textAlign: "left" }}>
            <h4>Shop</h4>
            <h5>By Catagory</h5>
            <p>shop home</p>
            <p>Mens</p>
            <p>Womens</p>
            <p>Kids</p>
            <p>Classics</p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>Sports</h4>
            <p>Mens Sports Eyewear</p>
            <p>Womens Sports Eyewear</p>
            <p>Kids Sports Eyewear</p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>Company</h4>
            <p>Customer Sevice</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Careers</p>
            <p>About</p>
            <p>Recall Info</p>
          </Col>
          <Col style={{ textAlign: "left" }}>
            <h4>Contact</h4>
            <div>
              <p>Email</p>
              <p>contact us</p>
              <p>Telephone</p>
              <p>+8800991122</p>
              <p>Address</p>
              <p>1588 south Dhaka-1216 Road-31/B</p>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <p>© 2021 Sunglass ShopBD</p>
    </div>
  );
};

export default Footer;
