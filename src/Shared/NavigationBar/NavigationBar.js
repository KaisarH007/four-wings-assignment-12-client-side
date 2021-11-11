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
// import logo from "../../../images/travel-logo.png";
import "./NavigationBar.css";

const NavigationBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        className="nav-bg"
        collapseOnSelect
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link className="text-white d-flex" as={Link} to="/home">
              {/* <img
                  style={{ width: "70px", height: "60px" }}
                  src={logo}
                  alt=""
                /> */}
              <h4 className="fw-bold mt-3"> FOUR WINGS </h4>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end  fs-5 fw-bold">
            <Nav.Link className="text-white" as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link className="text-white" as={Link} to="/dashboard">
              DashBoard
            </Nav.Link>

            {!user?.email && (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {user?.email && (
              <Button className="ms-4" variant="danger" onClick={logOut}>
                Log Out
              </Button>
            )}
            <h6 className="text-white ms-2">{user?.displayName}</h6>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
