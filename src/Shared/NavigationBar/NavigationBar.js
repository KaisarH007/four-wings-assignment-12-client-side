import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
import { faSignOutAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
const logIntIcon = <FontAwesomeIcon icon={faSignInAlt} />;
const NavigationBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar className="nav-bg" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Nav.Link className=" d-flex" as={Link} to="/home">
              <img
                style={{ width: "30px", height: "30px" }}
                src={logo}
                alt=""
              />
              <h5 className=" ms-2 text-white">
                {" "}
                <span className="text-info">FOUR</span> WINGS{" "}
              </h5>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end  fw-bold">
            <Nav.Link className="text-white" as={Link} to="/exploreAllProduct">
              <h5>More Products</h5>
            </Nav.Link>

            {user?.email && (
              <Nav.Link className="text-white" as={Link} to="/dashboard">
                <h5>DashBoard</h5>
              </Nav.Link>
            )}

            {!user?.email && (
              <Nav.Link className="text-white" as={Link} to="/login">
                <h5>{logIntIcon} Login</h5>
              </Nav.Link>
            )}

            {user?.email && (
              <h5 className="ms-4 text-white pointer-style" onClick={logOut}>
                {logOutIcon} Log Out
              </h5>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
