import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Alert } from "react-bootstrap";
const Review = () => {
  const { allContext } = useAuth();
  const { user } = allContext;
  const [reviewsuccess, setReviewsuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://fast-ravine-78519.herokuapp.com/review", data)
      .then((result) => {
        if (result.data.insertedId) {
          setReviewsuccess(true);
          reset();
        }
      });
  };
  return (
    <div>
      <h1 className="my-4 display-5">
        Hello ! {user.displayName} Give A Review Here
      </h1>
      {reviewsuccess && (
        <Alert variant="success">
          Thanks {user?.displayName} For your Review
        </Alert>
      )}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow p-3  mx-auto rounded-3 w-75"
        >
          <input
            className="form-control mb-3"
            defaultValue={user?.displayName}
            {...register("name")}
          />
          <input
            className="form-control mb-3"
            {...register("mark")}
            placeholder="How was Product Quality"
          />
          <input
            className="form-control mb-3"
            {...register("comment")}
            placeholder="give some reviews"
          />
          <input
            className="form-control mb-3"
            {...register("rating")}
            placeholder="Give rating out of 5"
          />
          {errors.exampleRequired && <span>This field is required</span>}

          <input
            className="btn btn-primary form-control"
            type="submit"
            value="ADD Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
