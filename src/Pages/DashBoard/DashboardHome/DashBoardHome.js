import React from "react";
import photo from "../../../Images/dashboard.jpg";
const DashBoardHome = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <h1 className="text-info fw-bold">Your Dashboard </h1>
      </div>
      <div>
        <img style={{ width: "100%", height: "550px" }} src={photo} alt="" />
      </div>
    </div>
  );
};

export default DashBoardHome;
