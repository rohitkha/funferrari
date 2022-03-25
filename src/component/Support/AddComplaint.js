import React, { useState } from "react";
import { getComplaint } from "../../helpers/apiHelper";
function AddComplaint() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  let formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);

  const SubmitHandler = async (e) => {
    // e.preventDefault();
    const { data } = await getComplaint(formData);
    console.log("data", data);
    // // alert(data.message);
    // window.location.reload();
  };
  console.log(title);

  return (
    <>
      <nav className="navbar" style={{ backgroundColor: "rgb(21, 21, 21)" }}>
        <div
          className="items"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            margin: "0.8rem 1rem 0",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "18px",
              fontWeight: "650",
            }}
          >
            Register a Complaint
          </h1>
        </div>
      </nav>
      <div className="container">
        <form className="row m-5" method="POST" encType="multipart/form-data">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="mb-3">
              <label htmlFor="exampleInputUsername" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="mb-3">
              <label htmlFor="exampleInputUsername" className="form-label">
                Image
              </label>
              <input
                type="file"
                className="form-control"
                id="exampleInputUsername"
                name="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          {/* <div className="col-sm-12 col-md-12 col-lg-12"> */}
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              // style={{ borderRadius: "5px" }}
              onClick={SubmitHandler}
            >
              Submit
            </button>
          </div>
          {/* </div> */}
        </form>
      </div>
    </>
  );
}

export default AddComplaint;
