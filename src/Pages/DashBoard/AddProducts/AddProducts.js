import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProducts.css";
const AddProducts = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://quiet-retreat-21565.herokuapp.com/addProducts", data)
      .then((res) => {
        alert("Successfully Added New Product");
        reset();
      });
    console.log(data);
  };
  return (
    <div className="add-service  mb-5">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="title-styel text-center">Add New Products</h1>
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
