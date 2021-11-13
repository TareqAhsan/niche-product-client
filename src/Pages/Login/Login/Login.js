import React from "react";
import { useHistory, useLocation } from "react-router";
import { Col, Row, Container, Button, Spinner, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";
import Navigation from "../../Home/Shared/Navigation/Navigation";
const Login = () => {
  const { allContext } = useAuth();
  const { signinwithemail, googlesignin, user, error, isloading } = allContext;
  const history = useHistory();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signinwithemail(data.email, data.password, location, history);
    reset();
  };

  const handleGoogle = () => {
    googlesignin(location, history);
  };
  return (
    <>
      <Navigation />
      <div className="bg-light">
        <Container className="py-3">
          <h1 className="my-3 display-5">Please Login</h1>
          <Row xs={1} md={2} className="g-3">
            <Col>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow p-4  mx-auto rounded-3"
              >
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="form-control mb-3"
                  type="email"
                  {...register("email")}
                  placeholder="Enter Your Email"
                />
                <input
                  className="form-control mb-3"
                  type="password"
                  {...register("password")}
                  placeholder="Enter Password"
                />
                {/* include validation with required or other standard HTML validation rules */}
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="btn btn-primary form-control"
                  type="submit"
                  value="Login"
                />
                <NavLink className="py-2" to="/register">
                  <Button className="my-1" variant="text">
                    New User ?Please Register
                  </Button>
                </NavLink>
                <Button
                  onClick={handleGoogle}
                  className="my-1 form-control"
                  variant="info"
                >
                  SigninWithGoogle
                </Button>
              </form>
              {isloading && <Spinner animation="border" variant="primary" />}
              {user?.email && (
                <Alert variant="primary">Login successfully</Alert>
              )}
              {error && <Alert variant="danger">{error}</Alert>}
            </Col>
            <Col>
              <img src={login} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Login;
