import React from "react";
import photo1 from "../../../Images/services/DN-Services-Icons-Free-Shipping-Hover.png";
import photo2 from "../../../Images/services/DN-Services-Icons-Money-Back-Hover.png";
import photo3 from "../../../Images/services/DN-Services-Icons-Service-Hover.png";
import photo4 from "../../../Images/services/DN-Services-Icons-Support-Hover.png";
import "./ExtraSection.css";

const ExtraSection = () => {
  return (
    <div className="container my-5">
      <div className="d-flex align-items-center justify-content-center my-2 text-info">
        <h2>REASONS TO BY FROM FOUR WINGS</h2>
      </div>

      <div className="row">
        <div className="col-md-3">
          <div className="">
            <div>
              <img style={{ width: "100%" }} src={photo1} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <div>
                <h5>FREE SHIPPING OVER $400</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <div>
              <img style={{ width: "100%" }} src={photo2} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <div>
                <h5>MONEY BACK GUARANTEE</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <div>
              <img style={{ width: "100%" }} src={photo3} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <div>
                <h5>DEDICATED SERVICE</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="">
            <div>
              <img style={{ width: "100%" }} src={photo4} alt="" />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <div>
                <h5>ONLINE SUPPORT 24/7</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
