import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import NavigationBar from "../../../Shared/NavigationBar/NavigationBar";
import CustomerReview from "../CustomerReview/CustomerReview";
import ExtraSection from "../ExtraSection/ExtraSection";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeProducts from "../HomeProducts/HomeProducts";

const Home = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <HomeBanner></HomeBanner>
      <HomeProducts></HomeProducts>
      <CustomerReview></CustomerReview>
      <ExtraSection></ExtraSection>
      <Footer></Footer>
    </>
  );
};

export default Home;
