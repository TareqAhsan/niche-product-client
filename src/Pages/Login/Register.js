import React from "react";
import { useHistory } from "react-router";
import { Col, Row, Container, Button,Spinner,Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import login from "../../images/login.png";
const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { allContext } = useAuth();
  const { registation, isloading,error,user} = allContext;
  const history = useHistory() 
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.password2) {
      alert("password didnot match");
      return;
    }
    registation(data.email, data.password,data.name,history);
    reset();
  };

  return (
    <div className="bg-light">
      <Container className="py-3">
        <h1 className="my-3 display-5">Please Register</h1>
        <Row xs={1} md={2} className="g-3">
          <Col>
            {!isloading && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="shadow p-3  mx-auto rounded-3"
              >
                {/* register your input into the hook by invoking the "register" function */}
                <input
                  className="form-control mb-3"
                  type="text"
                  {...register("name")}
                  placeholder="Enter Your Name"
                />
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
                <input
                  type="password"
                  className="form-control mb-3"
                  {...register("password2")}
                  placeholder="Retype Password"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  className="btn btn-primary form-control"
                  type="submit"
                  value="Register"
                />
                <NavLink to="/login">
                  <Button className="my-1" variant="text">
                    Already registered ?Please Sign in
                  </Button>
                </NavLink>
              </form>
            )}
            {isloading && <Spinner animation="border" variant="primary" />}
            {user?.email &&   <Alert  variant='primary'>Registered successfully</Alert>}
            {error && <Alert  variant='danger'>{error}</Alert>}
          </Col>
          <Col>
            <img src={login} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
