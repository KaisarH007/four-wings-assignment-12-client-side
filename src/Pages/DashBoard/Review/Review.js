import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "./Review.css";

const Review = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();
  console.log(user);
  const onSubmit = (data) => {
    data.photo = "https://i.ibb.co/SnkhYc9/user-removebg-preview.png";
    data.photo2 = user?.photoURL;
    axios
      .post("https://quiet-retreat-21565.herokuapp.com/addReviews", data)
      .then((res) => {
        alert("Successfully Added successfully");
        reset();
      });
    console.log(data);
  };

  return (
    <div>
      <h2>Customer Review</h2>
      <div className="add-review mb-5">
        <div className="d-flex align-items-center justify-content-center title-styel">
          <div>
            <h1 className="title-styel text-center">
              Give A Review on Our Service
            </h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            defaultValue={user.displayName}
            required
          />
          <input {...register("email")} defaultValue={user.email} required />
          <textarea {...register("comments")} placeholder="Comments" required />
          <input
            type="number"
            min="1"
            max="5"
            {...register("ratings")}
            placeholder="Give Rating out of 5"
            required
          />

          <input
            className="button-bg btn text-white"
            type="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
