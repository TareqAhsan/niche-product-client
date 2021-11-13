import React from 'react';
import { Container, Row,Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Product from '../Home/Product/Product';
import bg from '../../../src/images/sectionBg.png'
const Exploremore = () => {
  const {products} = useAuth()
    return (
        <div  style={{background:`url(${bg})`}}>
        <Container className="py-4">
          {!products?.length &&  <Spinner animation="border" variant="primary" />}
          <h1 className="my-3 mb-4 display-4 text-white">Products</h1>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products?.map((product) => (
              <Product key={product.key} product={product}></Product>
            ))}
          </Row>
        </Container>
      </div>
    );
};

export default Exploremore;