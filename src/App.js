import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Login/Login/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ExploreAllProduct from "./Pages/ExploreAllProduct/ExploreAllProduct";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import AuthProvider from "./AuthProvider/AuthProvider";
import PrivateRoute from "./Private/PrivateRoute";
import Register from "./Login/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>

          <PrivateRoute exact path="/productDetails/:productID">
            <ProductDetails></ProductDetails>
          </PrivateRoute>
          <Route exact path="/exploreAllProduct">
            <ExploreAllProduct></ExploreAllProduct>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
