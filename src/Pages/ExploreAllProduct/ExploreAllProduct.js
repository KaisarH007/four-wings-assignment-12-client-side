import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import ExploreProduct from "./ExploreProduct/ExploreProduct";

const ExploreAllProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://quiet-retreat-21565.herokuapp.com/exploreAllProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
        <h2>Product will added soon...{allProducts.length}</h2>
        <Row xs={1} md={3} className="g-4">
          {allProducts.map((product) => (
            <ExploreProduct
              product={product}
              keys={product._id}
            ></ExploreProduct>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default ExploreAllProduct;
