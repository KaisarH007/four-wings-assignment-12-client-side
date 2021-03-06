import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../Images/Google__G__Logo.svg.png";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
const Login = () => {
  const { signInWithGoogle, user, loginUser, authError } = useAuth();
  const [loginData, setLoginData] = useState();

  const history = useHistory();
  const location = useLocation();

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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData?.email, loginData?.password, location, history);
  };

  return (
    <>
      <NavigationBar></NavigationBar>
      <div className=" text-white my-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
              <div className="card shadow-lg nav-bg p-4 ">
                <div className=" text-center ">
                  <h3 className="mb-4">Please Login </h3>
                  <form onSubmit={handleOnSubmit}>
                    <input
                      onChange={handleOnChange}
                      type="email"
                      name="email"
                      id="userEmail"
                      placeholder="Email"
                      className="mb-2 p-2 rounded-2 w-100"
                    />{" "}
                    <br />
                    <input
                      onChange={handleOnChange}
                      type="password"
                      name="password"
                      id="userPassword"
                      placeholder="Password"
                      className="mb-2 p-2 rounded-2 w-100"
                    />
                    <br />
                    <Button
                      className=" fw-bold text-white w-100 my-4"
                      variant="dark"
                      type="submit"
                    >
                      Login
                    </Button>
                    {authError && <Alert variant="danger">{authError}</Alert>}
                    {user.email && (
                      <Alert variant="success">Login Successful</Alert>
                    )}
                  </form>
                  <br />
                  <NavLink
                    style={{ textDecoration: "none" }}
                    className="text-white "
                    to="/register"
                  >
                    <p>New User? Please register</p>
                  </NavLink>
                  <h4>-------------------------</h4>
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

export default Login;
