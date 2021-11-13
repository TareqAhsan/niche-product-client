import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors },
  } = useForm();
  const [successful, setSuccessful] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://fast-ravine-78519.herokuapp.com/products", data)
      .then((result) => {
        if (result.data.insertedId) {
          setSuccessful(true);
          reset();
        }
      });
  };
  return (
    <div className="container my-5">
      <h1 className="py-3">Add A Product</h1>
      {successful && (
        <Alert
          className="w-75 mx-auto m-3 rounded-3 text-bold"
          variant="success"
        >
          Product Added Successfully
        </Alert>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow p-3 w-75 mx-auto rounded-3"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="form-control mb-3"
          {...register("brand")}
          placeholder="Product Brand Name"
        />
        <input
          className="form-control mb-3"
          {...register("model")}
          placeholder="Product Model"
        />
        <input
          className="form-control mb-3"
          {...register("price")}
          placeholder="price"
        />
        <input
          className="form-control mb-3"
          {...register("description")}
          placeholder="description"
        />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="form-control mb-3"
          {...register("img")}
          placeholder="PhotoUrL"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input
          className="btn btn-primary form-control"
          type="submit"
          value="ADD"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
