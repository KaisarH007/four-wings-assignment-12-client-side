import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from "../../../Images/banners/d-banner-1.jpg";
import banner2 from "../../../Images/banners/d-banner-2.jpg";
import banner3 from "../../../Images/banners/d-banner-3.jpg";
import banner4 from "../../../Images/banners/d-banner-4.jpg";
const HomeBanner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
            <Link to="/exploreAllProduct">
              <Button variant className="button-bg text-white fw-bold">
                Explore More Products
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
            <Link to="/exploreAllProduct">
              <Button variant className="button-bg text-white fw-bold">
                Explore More Products
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
            <Link to="/exploreAllProduct">
              <Button variant className="button-bg text-white fw-bold">
                Explore More Products
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Third slide" />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
            <Link to="/exploreAllProduct">
              <Button variant className="button-bg text-white fw-bold">
                Explore More Products
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeBanner;
