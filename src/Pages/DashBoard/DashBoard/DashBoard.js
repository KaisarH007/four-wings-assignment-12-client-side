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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBasket,
  faStar,
  faMoneyBill,
  faTasks,
  faPlusCircle,
  faUserShield,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Shared/Footer/Footer";

const homeIcon = <FontAwesomeIcon icon={faHome} />;
const shoppingIcon = <FontAwesomeIcon icon={faShoppingBasket} />;
const ratingIcon = <FontAwesomeIcon icon={faStar} />;
const paymentIcon = <FontAwesomeIcon icon={faMoneyBill} />;
const manageIcon = <FontAwesomeIcon icon={faTasks} />;
const plusIcon = <FontAwesomeIcon icon={faPlusCircle} />;
const adminIcon = <FontAwesomeIcon icon={faUserShield} />;
const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const DashBoard = () => {
  const { logOut, user } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <>
      <div>
        <Row style={{ height: "100vh" }} className="dashboard-container g-0">
          <Col xs={12} md={3} className="nav-bg">
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
            <div className="d-flex align-item-center justify-content-center mt-4">
              <div>
                <h6 className="mb-3">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to="/home"
                  >
                    {homeIcon} Home
                  </Link>
                </h6>
                <h6 className="mb-3">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`${url}/myOrders`}
                  >
                    {shoppingIcon} My Orders
                  </Link>
                </h6>
                <h6 className="mb-3">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`${url}/reviews`}
                  >
                    {ratingIcon} Give Review
                  </Link>
                </h6>
                <h6 className="mb-3">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`${url}/payment`}
                  >
                    {paymentIcon} Payment
                  </Link>
                </h6>
                <h6 className="mb-3">
                  {" "}
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to={`${url}/manageAllProducts`}
                  >
                    {manageIcon} Manage All Products
                  </Link>
                </h6>
                <h6 className="mb-3">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`${url}/manageAllOrders`}
                  >
                    {manageIcon} Manage All Orders
                  </Link>
                </h6>

                <h6 className="mb-3">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`${url}/addProducts`}
                  >
                    {plusIcon} Add Products
                  </Link>
                </h6>
                <h6 className="mb-3">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`${url}/makeAdmin`}
                  >
                    {adminIcon} Make Admin
                  </Link>
                </h6>
                <h5
                  className="my-4 text-white fw-bold pointer-style"
                  onClick={logOut}
                >
                  {logOutIcon} Log Out
                </h5>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} className="mt-5">
            {/* <div className="d-flex align-items-center bg-info justify-content-center ">
              <div>
                <h1 className="text-center">
                  <span className="text-white"> Dashboard</span>
                </h1>
              </div>
            </div> */}

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
      {/* <Footer></Footer> */}
    </>
  );
};

export default DashBoard;
