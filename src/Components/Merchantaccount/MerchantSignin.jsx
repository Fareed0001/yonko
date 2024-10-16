import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const MerchantSignin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle sign-in logic, e.g., send data to backend
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="merch">
      <div className="back">
        <a href="/">
          <IoMdArrowRoundBack className="icon" />
        </a>
      </div>
      <div className="merchantsignin">
        <div className="con">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="formgroup">
              <h3>Email:</h3>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formgroup">
              <h3>Password:</h3>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button">
              <button type="submit">Submit</button>
            </div>
          </form>
          <div className="links">
            <p>
              <a href="#">Forgotten Password?</a>
            </p>
            <p>
              Don't have an account? <a href="/merchant">Sign up here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantSignin;
