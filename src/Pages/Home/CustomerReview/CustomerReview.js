import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="my-4">
      <h2>Customers Reviews</h2>
      <Row xs={1} md={4} className="g-4">
        {reviews.map((review) => (
          <Col>
            <Card className="text-center">
              <Card.Img
                variant="top"
                className="mx-auto"
                style={{ width: "150px", height: "150" }}
                src={review?.photo}
              />
              {/* <Card.Img variant="top" src={review?.photo} /> */}
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Card.Text>{review.comments.slice(0, 50)}</Card.Text>
                <Card.Text>{review.ratings}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReview;
