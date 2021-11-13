import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Card, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const OurBestsell = () => {
  const { products } = useAuth();
  return (
    <div className="py-4" style={{background:'#DBF0FE'}}>
      <Fade bottom>
        <h2 className="py-4">OUR BESTSELLERS</h2>
      </Fade>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {products?.slice(5, 12).map((product) => (
            <Zoom key={product._id}>
              <Card className="bg-black text-warning border-0 rounded">
                <Card.Img
                  variant="top"
                  src={product.img}
                  style={{ height: "260px" }}
                  className="rounded-3"
                />
                <Card.Body>
                  <Card.Title>{product.brand}</Card.Title>
                </Card.Body>
              </Card>
            </Zoom>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurBestsell;
