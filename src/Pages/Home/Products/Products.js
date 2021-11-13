import React from "react";
import Fade from "react-reveal/Fade";
import { Container, Row } from "react-bootstrap";
import Product from "../Product/Product";
import useAuth from "../../../hooks/useAuth";
import bg from "../../../images/sectionBg.png";
const Products = () => {
  // const {products} = useProducts()
  const { products } = useAuth();
  return (
    <div style={{ background: `url(${bg})` }}>
      <div className="py-4">
        <Container>
          <Fade bottom>
            <h1 className="my-3 mb-4 display-4 text-white">Products</h1>
          </Fade>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products?.slice(0, 6)?.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Products;
