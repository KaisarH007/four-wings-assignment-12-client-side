import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <HomeProducts></HomeProducts>
      <CustomerReview></CustomerReview>
    </>
  );
};

export default Home;
