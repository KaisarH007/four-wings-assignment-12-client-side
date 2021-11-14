import React, { useState } from "react";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");

  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email: adminEmail };
    // console.log(user);

    fetch("http://localhost:7000/user/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount && !data.modifiedCount) {
          alert("This Email Already An Admin");
        } else if (data.modifiedCount && data.matchedCount) {
          alert("Make Admin successfully");
        } else if (!data.matchedCount) {
          alert("This Email Not Registered User, Please Register First");
        }
        console.log(data);
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="add-review mb-5">
        <div className="d-flex align-items-center justify-content-center ">
          <div>
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
