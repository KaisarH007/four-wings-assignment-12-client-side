import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    axios
      .post("https://quiet-retreat-21565.herokuapp.com/addProducts", data)
      .then((res) => {
        setSuccess(true);
        reset();
      });
    console.log(data);
  };
  return (
    <div className="add-service  mb-5">
      <div className="d-flex align-items-center justify-content-center ">
        <div>
          {success && (
            <Alert variant="success" className="text-center fs-4">
              Product Added Successfully
            </Alert>
          )}
          <h1 className="text-center">
            <span className="text-info"> Add New Products</span>
          </h1>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Product Title" required />
        <textarea
          {...register("description")}
          placeholder="Product Description"
          required
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Product Price"
          required
        />
        <input
          {...register("photo")}
          placeholder="Product Photo URL"
          required
        />

        <input {...register("key")} placeholder="Product Key Code" required />

        <input className="button-bg btn text-white" type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default AddProducts;
