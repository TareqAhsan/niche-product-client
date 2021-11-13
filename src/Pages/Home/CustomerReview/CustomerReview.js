import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import Rating from "react-rating";

const CustomerReview = () => {
  const [review, setReview] = useState();
  useEffect(() => {
    axios("https://fast-ravine-78519.herokuapp.com/review").then((result) =>
      setReview(result.data)
    );
  }, [review]);
  return (
    <div className="bg-black">
      <Fade bottom>
        <h2 className="py-4 text-white display-5">Customer's Reviews</h2>{" "}
      </Fade>
      <div className="container py-4">
        <Row xs={1} md={2} lg={3} className="g-4">
          {review?.map((review) => (
            <Zoom key={review._id}>
              <Card className="border-0 shadow rounded-3">
                <Card.Body>
                  <Card.Title>Customer Name: {review.name}</Card.Title>
                  <Card.Title>Product Quality: {review.mark}</Card.Title>
                  <hr />
                  <Card.Text>review : {review.comment}</Card.Text>
                  <Card.Text>
                    <Rating
                      initialRating={review.rating}
                      emptySymbol="far fa-star text-warning"
                      fullSymbol="fas fa-star text-warning"
                      readonly
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Zoom>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CustomerReview;
