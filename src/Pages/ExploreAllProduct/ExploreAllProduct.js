import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ExploreProduct from "./ExploreProduct/ExploreProduct";

const ExploreAllProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/exploreAllProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <Container>
      <h2>Product will added soon...{allProducts.length}</h2>
      <Row xs={1} md={3} className="g-4">
        {allProducts.map((product) => (
          <ExploreProduct product={product} keys={product._id}></ExploreProduct>
        ))}
      </Row>
    </Container>
  );
};

export default ExploreAllProduct;
