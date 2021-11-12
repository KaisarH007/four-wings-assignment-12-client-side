import React from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
// import useAuth from "../../../Hooks/useAuth";
import logo from "../../Images/drone-logo-2.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        expand="lg"
        variant="primary"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link className=" d-flex" as={Link} to="/home">
              <img
                style={{ width: "50px", height: "50px" }}
                src={logo}
                alt=""
              />
              <h4 className="fw-bold mt-2 ms-2 text-white">
                {" "}
                <span className="text-info">FOUR</span> WINGS{" "}
              </h4>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end  fs-5 fw-bold">
            <Nav.Link className="text-white" as={Link} to="/exploreAllProduct">
              Explore
            </Nav.Link>

            {user?.email && (
              <Nav.Link className="text-white" as={Link} to="/dashboard">
                DashBoard
              </Nav.Link>
            )}

            {!user?.email && (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            {/* <h6 className="text-white ms-2">
              <img
                style={{ width: "50px", clipPath: "circle()" }}
                src={user?.photoURL}
                alt=""
              />
              {user?.displayName}
            </h6> */}
            {user?.email && (
              <Button className="ms-4" variant="danger" onClick={logOut}>
                Log Out
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
