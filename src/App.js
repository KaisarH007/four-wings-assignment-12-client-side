import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import NavigationBar from "./Shared/NavigationBar/NavigationBar";
import Footer from "./Shared/Footer/Footer";
import Login from "./Login/Login/Login";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ExploreAllProduct from "./Pages/ExploreAllProduct/ExploreAllProduct";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
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
        <Route path="/dashboard">
          <DashBoard></DashBoard>
        </Route>

        <Route exact path="/productDetails/:productID">
          <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/exploreAllProduct">
          <ExploreAllProduct></ExploreAllProduct>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
