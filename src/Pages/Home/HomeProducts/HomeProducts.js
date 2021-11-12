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
      <h2>Product will added soon...{products.length}</h2>
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <HomeProduct product={product} keys={product._id}></HomeProduct>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProducts;
