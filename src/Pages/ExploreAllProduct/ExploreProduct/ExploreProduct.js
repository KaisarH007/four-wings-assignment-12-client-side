import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ExploreProduct = ({ product }) => {
  const { photo, title, _id, description, price } = product;
  return (
    <>
      <Col>
        <Card className="h-100 p-2 card-style">
          <Card.Img
            variant="top"
            style={{ width: "100%", height: "250px" }}
            src={photo}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description?.slice(0, 50)}</Card.Text>
            <Card.Text>
              <h4>${price}</h4>
            </Card.Text>
            <Link to={`productDetails/${_id}`}>
              <Button variant className="button-bg text-white fw-bold">
                Explore Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ExploreProduct;
