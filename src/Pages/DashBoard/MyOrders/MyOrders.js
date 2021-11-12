import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  const url = `https://quiet-retreat-21565.herokuapp.com/myOrders?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    const response = window.confirm("Do You Want Cancel This Order?");
    if (response) {
      const url = `https://quiet-retreat-21565.herokuapp.com/orders/${id}`;
      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remainingOrders = myOrders.filter(
              (remainOrder) => remainOrder._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center title-styel">
        <div>
          <h1 className="text-center">
            Your Total Order
            <span className="text-danger"> 0{myOrders.length}</span>
          </h1>
        </div>
      </div>
      <Row xs={1} md={3} className="g-2 my-2">
        {myOrders.map((myOrder) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                style={{ height: "190px" }}
                src={myOrder?.ordered?.photo}
              />
              <Card.Body>
                <Card.Title className="">{myOrder?.ordered?.title}</Card.Title>

                <Card.Text>
                  <p>
                    <small>Price: </small>
                    {myOrder?.ordered?.price}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p>
                    <small>Order Status: </small>
                    <span className="text-primary">{myOrder?.status}</span>
                  </p>
                </Card.Text>

                <Button
                  onClick={() => handleDeleteOrder(myOrder?._id)}
                  className="fw-bold"
                  variant="danger"
                >
                  Cancel
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyOrders;
