import React from "react";
import { Button, Card } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  const { brand, model, img, price, description, _id } = product;
  return (
    <Zoom>
      <Card className="h-100 rounded-3">
        <Card.Img
          className="rounded-3"
          variant="top"
          src={img}
          style={{ height: "270px" }}
        />
        <Card.Body className="p-2">
          <Card.Title className="m-0">Brand: {brand}</Card.Title>
          <Card.Title className="m-1">Model: {model}</Card.Title>
          <Card.Title className="m-0">Price: {price}TK</Card.Title>
          <Card.Text>{description.slice(0, 250)}</Card.Text>
        </Card.Body>
        <Card.Footer className="border-0 bg-white">
          <Link to={`/purchase/${_id}`}>
            <Button>Purchase Now</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Zoom>
  );
};

export default Product;
