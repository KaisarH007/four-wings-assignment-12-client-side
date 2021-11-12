import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import NavigationBar from "../../../Shared/NavigationBar/NavigationBar";
import CustomerReview from "../CustomerReview/CustomerReview";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HomeBanner></HomeBanner>
      <HomeProducts></HomeProducts>
      <CustomerReview></CustomerReview>
      <Footer></Footer>
    </>
  );
};

export default Home;
