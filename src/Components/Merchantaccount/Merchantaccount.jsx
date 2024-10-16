// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import { IoMdArrowRoundBack } from "react-icons/io";
// import { useClerk, SignedIn, SignedOut, SignUp } from "@clerk/clerk-react";
// import Dashboard from "./Dashboard";

// const MerchantAccount = () => {
//   const { openSignUp, session } = useClerk();
//   const navigate = useNavigate();

//   const [isEmailEntered, setIsEmailEntered] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isChecked) {
//       alert("Please agree to the Terms and Conditions.");
//       return;
//     }

//     // Here you can handle form submission, e.g., send data to backend
//     console.log(formData);

//     // Show the modal after successful submission
//     setShowModal(true);
//   };

//   const handleEmailEntered = () => {
//     setIsEmailEntered(true);
//   };

//   const handleTermsClick = () => {
//     // Handle displaying terms and conditions (e.g., modal)
//     alert("Display terms and conditions");
//   };

//   const handleCheckboxChange = () => {
//     setIsChecked(!isChecked);
//   };

//   const closeModalAndRedirect = () => {
//     setShowModal(false);
//     navigate("/dashboard");
//   };

//   const handleSignUpSuccess = (user) => {
//     setShowModal(true);
//   };

//   useEffect(() => {
//     if (session && session.userId) {
//       navigate("/dashboard");
//     }
//   }, [session, navigate]);

//   const handleSignUpClick = () => {
//     openSignUp();
//   };

//   return (
//     <div className="merchantsign">
//       <div className="back">
//         <a href="/">
//           <IoMdArrowRoundBack className="icon" />
//         </a>
//       </div>
//       <div className="top">
//         <h3>Maximize Your Business Potential with Us</h3>
//       </div>

//       <div className="miniwords">
//         <p>
//           Transform your business with Yonko's unparalleled platform, where
//           local and online ventures flourish with extraordinary opportunities.
//           Experience seamless integration, targeted marketing strategies, and a
//           supportive community, all designed to expand your reach, enhance
//           visibility, and boost sales. With a one-time fee of just ₦118,650,
//           secure your complete business presence on the platform, including the
//           creation of your dedicated page. Choose from our flexible subscription
//           plans – monthly, 3 months, 6 months, or 12 months – to elevate your
//           online presence, increase market share, and stay competitive in
//           today's dynamic marketplace. Unlock your business's true potential
//           with Yonko today!
//         </p>
//       </div>

//       <div className="merchantform">
//         <div className="allform">
//           <div className="formheader">
//             <h2>Sign Up As a Merchant</h2>{" "}
//           </div>
//           <SignedOut>
//             <SignUp onSuccess={handleSignUpSuccess}>
//               {({ form, setForm }) => (
//                 <form onSubmit={form.submit}>
//                   <div className="formgroup">
//                     <h3>Email:</h3>
//                     <input
//                       type="email"
//                       name="emailAddress"
//                       value={form.fields.emailAddress}
//                       onChange={form.setFieldValue}
//                       required
//                       placeholder="xxx@gmail.com"
//                     />
//                   </div>
//                   <div className="formgroup">
//                     <h3>Phone:</h3>
//                     <input
//                       type="tel"
//                       name="phoneNumber"
//                       value={form.fields.phoneNumber}
//                       onChange={form.setFieldValue}
//                       required
//                     />
//                   </div>
//                   <div className="formgroup">
//                     <h3>Password:</h3>
//                     <input
//                       type="password"
//                       name="password"
//                       value={form.fields.password}
//                       onChange={form.setFieldValue}
//                       required
//                     />
//                   </div>
//                   <div className="button">
//                     <button type="submit">Continue</button>
//                   </div>
//                 </form>
//               )}
//             </SignUp>
//           </SignedOut>
//           <SignedIn>
//             <Dashboard />
//           </SignedIn>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MerchantAccount;


import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useClerk, SignedIn, SignedOut, SignUp } from "@clerk/clerk-react";
import Dashboard from "./Dashboard";

const MerchantAccount = () => {
  const { openSignUp, session } = useClerk();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSignUpSuccess = () => setShowModal(true);

  useEffect(() => {
    if (session && session.userId) {
      navigate("/dashboard");
    }
  }, [session, navigate]);

  return (
    <div className="merchant-sign">
      <div className="back">
        <Link to="/">
          <IoMdArrowRoundBack className="icon" />
        </Link>
      </div>
      <div className="content-wrapper">
        <h3 className="heading">Maximize Your Business Potential with Us</h3>
        <p className="description">
          Transform your business with Yonko's platform, where local and online ventures flourish. With a one-time fee of just ₦118,650, secure your business presence, including a dedicated page. Choose from flexible subscription plans to elevate your presence, increase market share, and stay competitive. Unlock your business's potential today!
        </p>

        <div className="form-container">
          <h2>Sign Up As a Merchant</h2>
          <SignedOut>
            <SignUp onSuccess={handleSignUpSuccess}>
              {({ form, setForm }) => (
                <form onSubmit={form.submit}>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={form.fields.emailAddress}
                      onChange={form.setFieldValue}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={form.fields.phoneNumber}
                      onChange={form.setFieldValue}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      name="password"
                      value={form.fields.password}
                      onChange={form.setFieldValue}
                      required
                      placeholder="Create a password"
                    />
                  </div>
                  <div className="submit-btn">
                    <button type="submit">Continue</button>
                  </div>
                </form>
              )}
            </SignUp>
          </SignedOut>
          <SignedIn>
            <Dashboard />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default MerchantAccount;
