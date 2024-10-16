import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Terms = () => {
  // State to track which section is open
  const [openSection, setOpenSection] = useState(null);

  // Function to toggle the section
  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <div className="terms">
      <div className="back">
        <a href="/">
          <IoMdArrowRoundBack className="icon" />
        </a>
      </div>

      <div className="con">
        <div className="heading">
          <h2>Terms & Conditions</h2>
        </div>

        <div className="term">
          <div className="sec">
            <h3 onClick={() => toggleSection(1)}>
              General Terms of Service {openSection === 1 ? "-" : "+"}
            </h3>
            {openSection === 1 && (
              <p>
                By using Yonko's services, you agree to comply with our Terms &
                Conditions. These terms govern your use of our platform and the
                services provided therein.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(2)}>
              Account Registration {openSection === 2 ? "-" : "+"}
            </h3>
            {openSection === 2 && (
              <p>
                You must register an account to access certain features of our
                platform. When registering, you agree to provide accurate and
                complete information and to keep your login credentials secure.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(3)}>
              Ordering and Payments {openSection === 3 ? "-" : "+"}
            </h3>
            {openSection === 3 && (
              <p>
                When placing orders through Yonko, you agree to provide accurate
                and up-to-date payment information. You authorize us to charge
                your provided payment method for any purchases made on our
                platform.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(4)}>
              Product Listings {openSection === 4 ? "-" : "+"}
            </h3>
            {openSection === 4 && (
              <p>
                Yonko strives to provide accurate and detailed product listings,
                including descriptions, prices, and images. However, we do not
                guarantee the accuracy or completeness of this information and
                are not liable for any discrepancies.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(5)}>
              User Conduct {openSection === 5 ? "-" : "+"}
            </h3>
            {openSection === 5 && (
              <p>
                Users of Yonko are expected to conduct themselves in a
                respectful and lawful manner. Any misuse of our platform,
                including but not limited to fraud, harassment, or violation of
                intellectual property rights, will result in account suspension
                or termination.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(6)}>
              Privacy Policy {openSection === 6 ? "-" : "+"}
            </h3>
            {openSection === 6 && (
              <p>
                By using Yonko's services, you also agree to our Privacy Policy,
                which outlines how we collect, use, and protect your personal
                information. Please review our Privacy Policy carefully before
                using our platform.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(7)}>
              Intellectual Property {openSection === 7 ? "-" : "+"}
            </h3>
            {openSection === 7 && (
              <p>
                All content on Yonko, including but not limited to text, images,
                logos, and trademarks, is the property of Yonko and protected by
                copyright and other intellectual property laws. Unauthorized use
                of this content is strictly prohibited.
              </p>
            )}
          </div>

          <div className="sec">
            <h3 onClick={() => toggleSection(8)}>
              Governing Law {openSection === 8 ? "-" : "+"}
            </h3>
            {openSection === 8 && (
              <p>
                These Terms & Conditions are governed by the laws of [Your
                Country], without regard to its conflict of laws principles. Any
                disputes arising from or related to these terms shall be
                exclusively resolved in the courts of [Your Jurisdiction].
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
