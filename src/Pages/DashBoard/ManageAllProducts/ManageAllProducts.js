import React, { useEffect, useState } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";

const ManageAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://quiet-retreat-21565.herokuapp.com/exploreAllProducts")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  const handleDeleteProducts = (id) => {
    const response = window.confirm("Do You Want To DELETE This Product");
    if (response) {
      const url = `https://quiet-retreat-21565.herokuapp.com/product/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainProducts = allProducts.filter(
              (remainProduct) => remainProduct._id !== id
            );
            setAllProducts(remainProducts);
          }
        });
    }
  };

  return (
    <div>
      <div className="d-flex align-items-center text-info justify-content-center ">
        <div>
          <h2>Total Products {allProducts.length} </h2>
        </div>
      </div>
      <Row xs={12} md={12} className="g-2 my-2 ">
        <Col>
          <Table border className=" table align-middle table-info">
            <thead className="text-center">
              <tr>
                <th>#</th>
                {/* <th>Photo</th> */}
                <th>Product Title</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody className="text-center align-items-center justify-content-center">
              {allProducts.map((products) => (
                <tr className="p-2">
                  <td>{allProducts.indexOf(products)}</td>
                  {/* <td>
                    <img
                      style={{ width: "100px", height: "90px" }}
                      src={products?.photo}
                      alt=""
                    />
                  </td> */}
                  <td>{products?.title}</td>
                  <td>{products?.price}</td>
                  <td>
                    {" "}
                    <Button
                      onClick={() => handleDeleteProducts(products?._id)}
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
