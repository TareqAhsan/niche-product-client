import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/3CGw5zM/ethan-robertson-SYx3-UCHZJlo-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Buy Exclusive Sunglasses</h3>
          <p>we provide worlds famous brands sunglasses</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/K7LmMR6/sebastian-coman-travel-dt-OTQYm-TEs0-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Premium Sunglasses</h3>
          <p>Premium sunglasses abailable here</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/hCc1Chm/david-lezcano-m-NCFOaa-Lu5o-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Modern ,Classic Sunglasses</h3>
          <p>
            You can buy Modern and Classic sunglasses.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
