import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Images/drone-logo-2.png";
import payphoto from "../../Images/payment-method.jpg";
const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;

const Footer = () => {
  return (
    <div className="footer-bg text-white">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-3">
            <h3>
              {" "}
              <img style={{ width: "60px" }} src={logo} alt="" />
              <span className="text-info">FOUR</span> WINGS
            </h3>
            <small>{phoneIcon} +920000333</small> <br />
            <small>{mailIcon} four_wings@gmail.net</small> <br />
          </div>
          <div className="col-md-4 text-center">
            <img
              className="rounded"
              style={{ width: "100%" }}
              src={payphoto}
              alt=""
            />
          </div>

          <div className="col-md-5">
            <h4 className="text-center">Subscribe Our NewsLetter</h4>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              {/* <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Suggestion or Feedback</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group> */}
            </Form>
            <Button className="p-2 btn  ">Submit</Button>
            <p>
              <small className="">
                Get the latest news and updates right at your inbox.
              </small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center  p-2">
        <p>&copy; 2021 FOUR WINGS. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
