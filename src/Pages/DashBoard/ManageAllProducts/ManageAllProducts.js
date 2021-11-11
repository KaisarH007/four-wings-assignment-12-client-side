import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

const ManageAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/exploreAllProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <h2>Manage All Products{allProducts.length} </h2>
      <Row xs={12} md={12} className="g-2 my-2">
        <Col>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((products) => (
                <tr>
                  <td>{allProducts.indexOf(products)}</td>
                  <td>{products?.title}</td>
                  <td>{products?.price}</td>
                  <td>
                    {" "}
                    <Button
                      // onClick={() => handleDeleteOrder(myOrders?._id)}
                      className="fw-bold"
                      variant="danger"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default ManageAllProducts;
