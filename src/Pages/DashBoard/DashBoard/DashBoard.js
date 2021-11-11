import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import AddProducts from "../AddProducts/AddProducts";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import "./DashBoard.css";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Payment from "../Payment/Payment";
import useAuth from "../../../Hooks/useAuth";
const DashBoard = () => {
  const { logOut, user } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div className="mx-o">
      <Row className="dashboard-container g-0">
        <Col xs={12} md={2} className="bg-secondary">
          <div className=" text-white mt-2 d-flex align-item-center justify-content-center">
            <div>
              <img
                style={{
                  width: "150px",
                  clipPath: "circle()",
                }}
                src={user?.photoURL}
                alt=""
              />
              <h4> {user?.displayName}</h4>
            </div>
          </div>
          <li>
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/myOrders`}
            >
              My Orders
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/reviews`}
            >
              Give Review
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/payment`}
            >
              Payment
            </Link>
          </li>
          <li>
            {" "}
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/manageAllProducts`}
            >
              Manage All Products
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/manageAllOrders`}
            >
              Manage All Orders
            </Link>
          </li>

          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/addProducts`}
            >
              Add Products
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`${url}/makeAdmin`}
            >
              Make Admin
            </Link>
          </li>
          <Button className="ms-4" variant="danger" onClick={logOut}>
            Log Out
          </Button>
        </Col>
        <Col xs={12} md={10} className="">
          <h1>Dashboard</h1>

          <Switch>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route exact path={`${path}/reviews`}>
              <Review></Review>
            </Route>
            <Route exact path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route exact path={`${path}/manageAllProducts`}>
              <ManageAllProducts></ManageAllProducts>
            </Route>
            <Route exact path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path={`${path}/addProducts`}>
              <AddProducts></AddProducts>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default DashBoard;
