import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import HomeProduct from "../HomeProduct/HomeProduct";

const HomeProducts = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://quiet-retreat-21565.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <Container>
      <div className="d-flex my-4 align-items-center text-info justify-content-center ">
        <div>
          <h1>Our Most Popular Items</h1>
        </div>
      </div>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <HomeProduct product={product} keys={product._id}></HomeProduct>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProducts;
