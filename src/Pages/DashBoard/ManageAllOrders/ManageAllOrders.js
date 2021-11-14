import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    fetch("https://quiet-retreat-21565.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [approved]);

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

  // const handelStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };
  // console.log(status);
  const handleApprove = (id) => {
    fetch(`https://quiet-retreat-21565.herokuapp.com/updateStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setApproved(true);
        }
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center text-info justify-content-center ">
        <div>
          <h2>Total Orders {allOrders.length} </h2>
        </div>
      </div>
      <div>
        <Table className=" table table-bordered align-middle  text-white">
          <thead className="text-center ">
            <tr className="bg-info">
              <th>SL</th>
              <th>Product Photo</th>
              <th>Product Title</th>
              <th>Product price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {allOrders.map((orders) => (
              <tr keys={orders._id} className="bg-info">
                <td>{allOrders.indexOf(orders)}</td>
                <td>
                  {" "}
                  <img
                    style={{
                      width: "130px",
                      height: "90px",
                      borderRadius: "10px",
                      boxShadow: "2px 2px 2px 1px rgba(51, 46, 46, 0.664)",
                    }}
                    src={orders?.ordered?.photo}
                    alt=""
                  />
                </td>
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
                  <Button
                    onClick={() => handleApprove(orders?._id)}
                    className="ms-2 fw-bold"
                    variant="primary"
                  >
                    Approved
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
