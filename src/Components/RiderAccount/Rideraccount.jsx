import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const RiderAccount = () => {
  const [formData, setFormData] = useState({
    storeName: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    businessType: "",
    password: "",
    confirmPassword: "",
    storeType: "", // Added storeType field
  });

  const [isSignUp, setIsSignUp] = useState(true);
  const [isEmailEntered, setIsEmailEntered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      storeName: "",
      contactName: "",
      email: "",
      phone: "",
      address: "",
      businessType: "",
      password: "",
      confirmPassword: "",
      storeType: "",
    });
  };

  const handleEmailEntered = () => {
    setIsEmailEntered(true);
  };

  return (
    <div className="merchantsign">
      <div className="back">
        <a href="/">
          <IoMdArrowRoundBack className="icon" />
        </a>
      </div>
      <div className="merchantform">
        <div className="allform">
          <div className="formheader">
            <h2>{isSignUp ? "Join Logistics Team" : "Sign In"}</h2>
            <p>
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <Link to="/ridersignin">Sign in here</Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            {isSignUp ? (
              <>
                <div className="formgroup">
                  <h3>Full Name:</h3>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="formgroup">
                  <h3>UserName:</h3>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    placeholder="@JohnDoe"
                  />
                </div>

                <div className="formgroup">
                  <h3>Email:</h3>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="xxx@gmail.com"
                  />
                </div>
                <div className="formgroup">
                  <h3>Phone:</h3>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="formgroup">
                  <h3>Address:</h3>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
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
                <div className="formgroup">
                  <h3>Retype Password:</h3>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="terms">
                  <p>
                    By clicking "Submit", you will recieve an appointment
                    message to your email above in the next 48 to 72hrs.
                  </p>
                </div>
                <div className="button">
                  <button type="submit">Submit</button>
                </div>
              </>
            ) : (
              <>
                {!isEmailEntered ? (
                  <div className="formgroup">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <button type="button" onClick={handleEmailEntered}>
                      Next
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="formgroup">
                      <label>Password:</label>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit">Login</button>
                  </>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RiderAccount;
