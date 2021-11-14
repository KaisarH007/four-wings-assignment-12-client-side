import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
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
      {allProducts.length === 0 && (
        <div
          className=" d-flex align-items-center justify-content-center"
          style={{ height: "500px" }}
        >
          <Spinner animation="border" className="title-color" />
        </div>
      )}
      <Container className="mb-5">
        <div className="d-flex my-4 align-items-center title-style justify-content-center ">
          <div>
            <h1>Our Exclusive Collection</h1>
          </div>
        </div>

        <Row xs={1} md={3} className="g-4 ">
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
