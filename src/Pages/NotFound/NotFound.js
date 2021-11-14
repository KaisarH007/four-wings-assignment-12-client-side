import React from "react";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className=" not-found-bg d-flex align-items-center justify-content-center">
      <div>
        <div className="text-style">
          <h1> 404 </h1>
        </div>
        <div className=" text-danger d-flex align-items-center justify-content-center">
          <h5>Page Not Found</h5>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
