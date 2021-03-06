import React, { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/Google__G__Logo.svg.png";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
const Register = () => {
  const { signInWithGoogle, registerUser, authError, user, isLoading } =
    useAuth();
  const [loginData, setLoginData] = useState();

  const history = useHistory();
  const location = useLocation();
  const userPhoto = "https://i.ibb.co/SnkhYc9/user-removebg-preview.png";
  const handleGoogleLogIn = () => {
    signInWithGoogle(location, history);
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  console.log(loginData);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (loginData?.password !== loginData?.password2) {
      alert("Password did not match");
      return handleOnSubmit;
    }

    registerUser(
      loginData?.email,
      loginData?.name,
      loginData?.password,
      history,
      userPhoto
    );
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className=" text-white my-4">
        <div className="container">
          {isLoading && (
            <div
              className=" d-flex align-items-center justify-content-center"
              style={{ height: "500px" }}
            >
              <Spinner animation="border" className="title-color" />
            </div>
          )}
          <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
              <div className="card shadow-lg nav-bg p-4 home-bg">
                <div className=" text-center ">
                  <h3 className="mb-4">Please Register </h3>
                  {!isLoading && (
                    <form onSubmit={handleOnSubmit}>
                      <input
                        onChange={handleOnChange}
                        type="text"
                        name="name"
                        id="userName"
                        placeholder="Name"
                        className="mb-2 p-2 rounded-2 w-100"
                      />{" "}
                      <br />
                      <input
                        onChange={handleOnChange}
                        type="email"
                        name="email"
                        id="userEmail"
                        placeholder="Email"
                        className="mb-2 p-2 rounded-2 w-100"
                      />
                      <br />
                      <input
                        onChange={handleOnChange}
                        type="password"
                        name="password"
                        id="userPassword"
                        placeholder="Password"
                        className="mb-2 p-2 rounded-2 w-100"
                      />
                      <input
                        onChange={handleOnChange}
                        type="password"
                        name="password2"
                        id="userPassword"
                        placeholder="Re-type Password"
                        className="mb-2 p-2 rounded-2 w-100"
                      />
                      <br />
                      <Button
                        className=" fw-bold text-white w-100 my-4"
                        variant="dark"
                        type="submit"
                      >
                        Register
                      </Button>
                      {authError && <Alert variant="danger">{authError}</Alert>}
                      {user.email && (
                        <Alert variant="success">
                          {user?.email} Register Successful
                        </Alert>
                      )}
                    </form>
                  )}
                  <br />
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="text-white"
                    to="/login"
                  >
                    <p>Already Register? Please Login</p>
                  </NavLink>
                  <h4>-----------------------------</h4>
                  <Button
                    className="w-100 fw-bold"
                    onClick={handleGoogleLogIn}
                    variant="dark"
                  >
                    <img style={{ width: "30px" }} src={logo} alt="" /> Sign In
                    With Google Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Register;
