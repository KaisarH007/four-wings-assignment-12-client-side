import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
  return (
    <div>
      <HomeBanner></HomeBanner>
      <HomeProducts></HomeProducts>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
