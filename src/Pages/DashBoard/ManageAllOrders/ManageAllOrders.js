import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch("https://quiet-retreat-21565.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    const response = window.confirm("Do You Want DELETE?");
    if (response) {
      const url = `https://quiet-retreat-21565.herokuapp.com/orders/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainingOrders = allOrders.filter(
              (remainOrder) => remainOrder._id !== id
            );
            setAllOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center text-info justify-content-center ">
        <div>
          <h2>Total Orders {allOrders.length} </h2>
        </div>
      </div>
      <div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Product price</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((orders) => (
              <tr>
                <td>{allOrders.indexOf(orders)}</td>
                <td>{orders?.ordered?.title}</td>
                <td>{orders?.ordered?.price}</td>

                <td>{orders?.status}</td>
                <td>
                  <Button
                    onClick={() => handleDeleteOrder(orders?._id)}
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
