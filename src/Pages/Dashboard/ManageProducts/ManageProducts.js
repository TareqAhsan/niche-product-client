import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
const ManageProducts = () => {
  const { products } = useAuth();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are You Sure want to delete this product?");
    if (proceed) {
      axios
        .delete(`https://fast-ravine-78519.herokuapp.com/products/${id}`)
        .then((result) => {
          if (result.data.deletedCount > 0) {
            setDeleteSuccess(true);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="display-5 my-4">Manage your Products</h1>
      <Container className="my-4">
        {deleteSuccess && (
          <Alert className="mx-auto m-3 rounded-3 text-bold" variant="danger">
            Product Deleted Successfully
          </Alert>
        )}
        <Row xs={1} md={2} lg={2} className="g-4">
          {products?.map((product) => (
            <Col key={product._id}>
              <div className="card mb-3" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={product.img}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{product.brand}</h5>
                      <h6 className="text-primary card-title">
                        {product.model}
                      </h6>
                      <p className="card-text">
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn btn-danger btn-small"
                        >
                          Delete This Product
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ManageProducts;
