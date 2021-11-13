import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Navigation from "../Home/Shared/Navigation/Navigation";
const Purchase = () => {
  const [singleData, setSingleData] = useState();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const { allContext } = useAuth();
  const { user } = allContext;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  useEffect(() => {
    axios(`https://fast-ravine-78519.herokuapp.com/products/${id}`).then(
      (result) => {
        setSingleData(result.data);
        //   console.log(result.data)
      }
    );
  }, [id]);
  const onSubmit = (data) => {
    console.log(data);
    const proceed = window.confirm("Are You Sure to confirm your Order?");
    if (proceed) {
      const { img, model, brand, price, key, description } = singleData;
      data.status = "pending";
      const orderInfo = { ...data, img, model, brand, price, key, description };
      console.log(orderInfo);
      axios
        .post("https://fast-ravine-78519.herokuapp.com/orders", orderInfo)
        .then((result) => {
          if (result.data.insertedId) {
            setOrderSuccess(true);
            reset();
          }
        });
    }
  };
  return (
    <>
      <Navigation />
      <div>
        <Container>
          <h1 className="my-4 py-4">Place your Order here</h1>
          {orderSuccess && (
            <Alert variant="success">
              Thanks {user?.displayName}!! You Have SuccessFully Placed Your
              order!!
            </Alert>
          )}
          <Row xs={1} md={2} lg={2}>
            <Col>
              <div className="card mb-3 my-4" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={singleData?.img}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title m-0">
                        Brand :{singleData?.brand}
                      </h5>
                      <h6 className="card-title">Model {singleData?.model}</h6>
                      <h6 className="card-title mb-1">
                        Price: {singleData?.price}TK
                      </h6>
                      <small className="card-text">
                        {singleData?.description}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  background:
                    "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
                }}
                className="p-4  mx-auto rounded-3 my-4"
              >
                <input
                  defaultValue={user?.displayName}
                  {...register("name")}
                  className="form-control mb-3"
                  readOnly
                />
                <input
                  defaultValue={user?.email}
                  {...register("email")}
                  className="form-control mb-3"
                  readOnly
                />
                <input
                  placeholder="Your Phone No"
                  {...register("phoneno")}
                  className="form-control mb-3"
                />
                <input
                  placeholder="Your Address"
                  {...register("address")}
                  className="form-control mb-3"
                />

                <input
                  type="submit"
                  value="place your order"
                  className="form-control mb-3 btn btn-primary"
                />
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Purchase;
