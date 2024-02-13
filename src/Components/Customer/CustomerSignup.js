import React from "react";
import { Link } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
// import { MdPassword } from "react-icons/md";
// import '../Customer/CustomerSignup.css';

const CustomerSignup = () => {
  return (
    <div  className="container p-5">
      <div className="row">
      <div className="col-xl-3"></div>
        <div className="col-xl-6">
    <div className="wrapper">
      <form action="">
        <h1>Customer Signup</h1>
        <div className="input-box">
          <input type="text" placeholder="Name" required />
        </div>

        <div className="input-box">
          <input type="email" placeholder="Email ID" required />
        </div>

        <div className="input-box">
          <input type="tel" placeholder="Mobile Number" required />
        </div>

        <div className="input-box">
          <input type="date" placeholder="Date of Birth" required />
        </div>

        <div className="input-box">
          <input type="password" placeholder="Password" required />
        </div>

        <div className="input-box1">
          <div className="radio-container">
            <input type="radio" id="male" name="gender" value="male" required />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>

        <div className="remember-forget">
          <label>
            <input type="checkbox" />
            Remember me{" "}
          </label>
          <Link to="/Forgot_password"> Forgot Password</Link>{" "}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
    </div>
    <div className="col-xl-3"></div>
    </div>
    </div>
  );
};

export default CustomerSignup;
