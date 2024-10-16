import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Privacy = () => {
  // State to track which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle the dropdown
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="privacy">
      <div className="back">
        <a href="/">
          <IoMdArrowRoundBack className="icon" />
        </a>
      </div>

      <div className="con">
        <div className="heading">
          <h2>Privacy Policy</h2>
        </div>
        <div className="private">
          <div className="sec">
            <h3 onClick={() => toggleDropdown(1)}>
              Information We Collect {openDropdown === 1 ? "-" : "+"}
            </h3>
            {openDropdown === 1 && (
              <p>
                We collect personal information when you register an account
                with us, place an order, or interact with our platform. This
                information may include your name, email address, shipping
                address, phone number, payment information, and any other
                information you choose to provide.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleDropdown(2)}>
              How We Use Your Information {openDropdown === 2 ? "-" : "+"}
            </h3>
            {openDropdown === 2 && (
              <p>
                We use the information we collect to process your orders,
                provide customer support, improve our services, and communicate
                with you about promotions, updates, and other relevant
                information. We may also use your information to personalize
                your experience on our platform and to prevent fraudulent
                activity.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleDropdown(3)}>
              Sharing of Information {openDropdown === 3 ? "-" : "+"}
            </h3>
            {openDropdown === 3 && (
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                necessary to provide our services or as required by law. We may
                share your information with trusted third-party service
                providers who assist us in operating our website, conducting our
                business, or servicing you, as long as those parties agree to
                keep this information confidential.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleDropdown(4)}>
              Security Measures {openDropdown === 4 ? "-" : "+"}
            </h3>
            {openDropdown === 4 && (
              <p>
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                access your account. We use encryption technology, secure server
                connections, and other industry-standard security practices to
                protect your data.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleDropdown(5)}>
              Updates to Privacy Policy {openDropdown === 5 ? "-" : "+"}
            </h3>
            {openDropdown === 5 && (
              <p>
                We reserve the right to update or modify this Privacy Policy at
                any time, so please review it frequently. Your continued use of
                our platform after any changes to this Privacy Policy will
                constitute your acceptance of such changes.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleDropdown(6)}>
              Contact Us {openDropdown === 6 ? "-" : "+"}
            </h3>
            {openDropdown === 6 && (
              <p>
                If you have any questions or concerns about our Privacy Policy
                or the way we handle your personal information, please contact
                us at privacy@yonko.com.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
