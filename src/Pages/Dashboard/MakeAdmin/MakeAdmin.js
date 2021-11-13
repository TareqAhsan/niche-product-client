import axios from "axios";
import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
const MakeAdmin = () => {
  const [addsuccess, setAddsuccess] = useState(false);
  const { allContext } = useAuth();
  const { token } = allContext;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .put("https://fast-ravine-78519.herokuapp.com/users/admin", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        if (result.data.modifiedCount) {
          setAddsuccess(true);
          reset();
        }
      });
  };
  return (
    <div className="my-4">
      <h2 className="display-5 py-4">Add An Admin</h2>
      {addsuccess && (
        <Alert variant="success" className="w-75 mx-auto">
          Admin Added Successfully !!
        </Alert>
      )}
      <Container>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 shadow w-75 mx-auto my-2"
        >
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email"
            {...register("email")}
          />
          <input className="form-control btn btn-success my-4" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
