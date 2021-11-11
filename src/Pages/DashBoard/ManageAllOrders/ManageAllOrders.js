import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div className="container">
      <h2>Manage All Orders{allOrders.length} </h2>

      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product price</th>
              <th>Product ID</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((orders) => (
              <tr>
                <td>1</td>
                <td>{orders?.ordered?.title}</td>
                <td>{orders?.ordered?.price}</td>
                <td>{orders?.ordered?._id}</td>
                <td>{orders?.status}</td>
                <td>
                  <Button
                    // onClick={() => handleDeleteOrder(myOrders?._id)}
                    className="fw-bold"
                    variant="danger"
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
