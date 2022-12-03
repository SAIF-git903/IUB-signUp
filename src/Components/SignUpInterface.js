import React from "react";
import iubImage from "./unsplash.jpeg";
import { Link } from "react-router-dom";

function SignUpInterface(props) {
  const { nextStep, onchange, handleSubmit } = props;

  const btn_style = {
    backgroundColor: "#E5AE32",
    borderColor: "#E5AE32",
    height: "54px",
    padding: "20px 130px",
    border: "1px solid transparent",
    textDecoration: "none",
    fontSize: "1rem",
    color: "black",
    marginRight: "20px",
    borderRadius: "5px",
    color: "#212529",
    fontSize: "30px",
  };

  return (
    <>
      <div className="top-container">
        <div className="img">
          <img src={iubImage} alt="iub img" id="image" />
        </div>
        <div className="sticky-text">
          New
          <br />
          Account
        </div>
        <div className="text-center form">
          <div className="container my-4">
            <div className="text my-4">
              <h3>
                Sign Up to <strong>IUB E-Portal</strong>
              </h3>
              <p id="para">We need some details to create your Account</p>
            </div>
            <form>
              <div className="inputGrid">
                <div>
                  <input
                    required
                    name="firstName"
                    type="text"
                    id="fname"
                    placeholder="First Name"
                    onChange={onchange("firstName")}
                  />
                </div>
                <div>
                  <input
                    required
                    name="lastName"
                    type="text"
                    id="lname"
                    placeholder="Last Name"
                    onChange={onchange("lastName")}
                  />
                </div>
              </div>
              <div>
                <input
                  required
                  name="fatherName"
                  type="text"
                  id="fatherName"
                  placeholder="Father Name"
                  onChange={onchange("fatherName")}
                />
              </div>
              <div>
                <select
                  style={{ fontSize: "19px" }}
                  onChange={onchange("gender")}
                  name="gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div>
                <input
                  required
                  name="email"
                  type="email"
                  id="email"
                  placeholder="Email"
                  onChange={onchange("email")}
                />
              </div>
              <div>
                <input
                  required
                  name="phone"
                  type="phone"
                  id="phone"
                  placeholder="Phone"
                  onChange={onchange("phone")}
                />
              </div>
              <div>
                <input
                  required
                  name="cnic"
                  type="text"
                  id="cnic"
                  placeholder="CNIC/B.Form/Passport"
                  onChange={onchange("cnic")}
                />
              </div>
              <div>
                <input
                  required
                  name="address"
                  type="text"
                  id="address"
                  placeholder="Address"
                  onChange={onchange("address")}
                />
              </div>
              <div>
                <input
                  required
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password"
                  onChange={onchange("password")}
                />
              </div>
              <div>
                <input
                  required
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  onChange={onchange("confirmPassword")}
                />
              </div>
              <div className="error">
                <span
                  id="8char"
                  className="fa fa-remove"
                  style={{ color: "#FF0004" }}
                ></span>{" "}
                8 Characters Long
                <br />
                <span
                  id="ucase"
                  className="fa fa-remove"
                  style={{ color: "#FF0004" }}
                ></span>{" "}
                One Uppercase Letter
                <br />
                <span
                  id="lcase"
                  className="fa fa-remove"
                  style={{ color: "#FF0004" }}
                ></span>{" "}
                One Lowercase Letter
                <br />
                <span
                  id="num"
                  className="fa fa-remove"
                  style={{ color: "#FF0004" }}
                ></span>{" "}
                One Number
                <br />
                <span
                  id="pwmatch"
                  className="fa fa-remove"
                  style={{ color: "#FF0004" }}
                ></span>{" "}
                Passwords Match
              </div>
              <div>
                <button
                  id="submit"
                  type="submit"
                  className="btn btn-secondary btn-warning"
                  onClick={handleSubmit}
                >
                  Register Now
                </button>

                {/* <Link
                  style={btn_style}
                  to="/ShowDataInTable"
                  role="button"
                  // onClick={handleSubmit}
                >
                  Register
                </Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpInterface;
