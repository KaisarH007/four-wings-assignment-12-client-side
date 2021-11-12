import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import {
  faStar,
  faStarHalf,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const starIcon = <FontAwesomeIcon icon={faStar} />;
const starHalfIcon = <FontAwesomeIcon icon={faStarHalfAlt} />;

const CustomerReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://quiet-retreat-21565.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Container className="my-4">
      <div className="d-flex my-4 align-items-center text-info justify-content-center ">
        <div>
          <h2>Customers Reviews</h2>
        </div>
      </div>

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
                <Card.Text className="text-warning text-border">
                  <Rating
                    emptySymbol={starHalfIcon}
                    fullSymbol={starIcon}
                    fractions={2}
                    initialRating={review.ratings}
                    readonly
                  ></Rating>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomerReview;
