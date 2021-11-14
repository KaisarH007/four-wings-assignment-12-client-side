import React, { useState } from "react";
import { Alert } from "react-bootstrap";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");
  const [success, setSuccess] = useState("");

  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email: adminEmail };

    fetch("http://localhost:7000/user/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount && !data.modifiedCount) {
          setSuccess("Already An Admin");
          setAdminEmail("");
        } else if (data.modifiedCount && data.matchedCount) {
          setSuccess("Admin successfully");
          setAdminEmail("");
        } else if (!data.matchedCount) {
          setSuccess("Not Registered");
          setAdminEmail("");
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <div className="add-review mb-5">
        <div className="d-flex align-items-center justify-content-center ">
          <div>
            <div>
              {success === "Admin successfully" && (
                <Alert variant="success" className="text-center fs-4">
                  Make Admin successfully
                </Alert>
              )}
              {success === "Already An Admin" && (
                <Alert variant="warning" className="text-center fs-4">
                  This Email Already An Admin
                </Alert>
              )}
              {success === "Not Registered" && (
                <Alert variant="danger" className="text-center fs-4">
                  This Email Not Registered User, Please Register First
                </Alert>
              )}
            </div>
            <h1 className=" text-center text-info">Make An Admin</h1>
          </div>
        </div>
        <form onSubmit={handleAdminSubmit}>
          <input onBlur={handleOnBlur} required type="email" />

          <input
            className="button-bg btn text-white"
            type="submit"
            value="MAKE ADMIN"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
