import React from "react";
import { Carousel, Button } from "react-bootstrap";
import banner1 from "../../../Images/banners/d-banner-1.jpg";
import banner2 from "../../../Images/banners/d-banner-2.jpg";
import banner3 from "../../../Images/banners/d-banner-3.jpg";
import banner4 from "../../../Images/banners/d-banner-4.jpg";
import banner5 from "../../../Images/banners/d-banner-5.jpg";
const HomeBanner = () => {
  return (
    <>
      <Carousel fade className="img-wrapper">
        <Carousel.Item>
          <img
            className="d-block w-100 inner-img"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 inner-img"
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 inner-img"
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 inner-img"
            src={banner4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 inner-img"
            src={banner5}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Welcome to Four Wings</h3>
            <p>World Number one Drone Website</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeBanner;
