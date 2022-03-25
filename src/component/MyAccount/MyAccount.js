import React, { useEffect, useState } from "react";
import Navbar from "../../common/Navbar";
import { getUser, editUser } from "../../helpers/apiHelper";
import "./MyAccount.css";
const MyAccount = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const [readOnly, setReadOnly] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const data = await getUser();
    setUser(data.data.data);
  };

  const handleChange = (e) => {
    const Value = e.target.value;

    setUser({
      ...user,
      [e.target.name]: Value,
    });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const { data } = await editUser(user);

    alert(data.message);
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div className="container user">
        <div
          className="account-title"
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            color: "rgb(110, 132, 163)",
            marginBottom: "40px",
          }}
        >
          My Account
        </div>
        <div className="user-from">
          <div className="row">
            <div
              className="mb-3"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <img className="pic" src={user.profile_photo_url} alt="profile" />
              {readOnly && (
                <button
                  className="material-icons edit-button"
                  style={{
                    color: "white",
                  }}
                  onClick={() => setReadOnly(false)}
                >
                  edit_note
                </button>
              )}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  name="name"
                  onChange={handleChange}
                  value={user.name}
                  readOnly={readOnly}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="mb-3">
                <label htmlFor="exampleInputUsername" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputUsername"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  readOnly={readOnly}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  readOnly={readOnly}
                />
              </div>
            </div>
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            {!readOnly && (
              <>
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: "5px" }}
                  onClick={() => setReadOnly(true)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ borderRadius: "5px" }}
                  onClick={SubmitHandler}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
