import React, { useState } from "react";

const MakeAdmin = () => {
  const [adminEmail, setAdminEmail] = useState("");

  const handleOnBlur = (e) => {
    setAdminEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { adminEmail };
    console.log(user);

    fetch("https://quiet-retreat-21565.herokuapp.com/user/admin", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.preventDefault();
  };
  return (
    <div>
      <h2>Make Admin</h2>
      <h2>Customer Review</h2>
      <div className="add-review mb-5">
        <div className="d-flex align-items-center justify-content-center title-styel">
          <div>
            <h1 className="title-styel text-center">
              Give A Review on Our Service
            </h1>
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
