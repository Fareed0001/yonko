import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useLocation } from "react-router-dom";

const TermsandConditions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="terms-container">
      <div className="back">
        <button onClick={() => navigate(location.state?.from || "/merchant")}>
          <IoMdArrowRoundBack className="icon" />
        </button>
      </div>

      <h2>Yonko Merchant Terms and Conditions</h2>
      <p>
        Welcome to Yonko! These Terms and Conditions govern your use of the
        Yonko platform as a merchant. By registering as a merchant on Yonko, you
        agree to abide by these terms. Please read them carefully.
      </p>

      <div className="cop">
        <h3>1. Registration</h3>
        <p>
          1.1. To become a merchant on Yonko, you must complete the registration
          process and provide accurate and complete information about your
          business.
        </p>
        <p>
          1.2. Must be a descision maker for your organization (ceo,
          shareholder, owner) and legally authorized to represent the business
          you are registering.
        </p>
      </div>

      <div className="cop">
        <h3>2. Merchant Obligations</h3>
        <p>2.1. As a merchant on Yonko, you are responsible for:</p>
        <ul>
          <li>
            Maintaining the accuracy and completeness of your business
            information.
          </li>
          <li>Providing high-quality products or services to customers.</li>
          <li>Complying with all applicable laws and regulations.</li>
          <li>
            Resolving customer inquiries and issues in a timely and professional
            manner.
          </li>
        </ul>
        <p>
          2.2. You agree not to engage in any fraudulent, deceptive, or illegal
          activities on the Yonko platform.
        </p>
      </div>

      <div className="cop">
        <h3>3. Fees</h3>
        <p>
          3.1. Yonko charges a onetime fee of ₦118,650 for merchants to join the
          platform (comes with your onine presence on the platform). And a
          Monthly, Quaterly, Semi-annually, and Annually fee. Check signup form
          for more details.
        </p>

        <p>
          3.3. Additional fees may apply for certain features or services
          offered by Yonko. These fees will be communicated to you prior to
          their implementation.
        </p>
      </div>

      <div className="cop">
        <h3>4. Intellectual Property</h3>
        <p>
          4.1. By registering as a merchant on Yonko, you grant Yonko a
          non-exclusive, royalty-free license to use, reproduce, and display
          your business information and content for the purpose of operating the
          platform.
        </p>
        <p>
          4.2. You represent and warrant that you have the necessary rights to
          grant this license to Yonko.
        </p>
      </div>

      <div className="cop">
        <h3>5. Termination</h3>
        <p>
          5.1. Yonko reserves the right to terminate or suspend your account at
          any time, with or without cause, at our sole discretion.
        </p>

        <p>
          5.2. Merchant has the legal right to discontinue their subscription
          giving yonko a 60 days notice
        </p>

        <p>
          5.3. Upon termination, you will no longer have access to the Yonko
          platform, and any outstanding fees or obligations must be settled.
        </p>
      </div>

      <div className="cop">
        <h3>6. Amendments</h3>
        <p>
          6.1. Yonko may update or modify these Terms and Conditions from time
          to time. Any changes will be communicated to you, and your continued
          use of the platform constitutes acceptance of the revised terms.
        </p>
      </div>

      <div className="cop">
        <h3>7. Governing Law</h3>
        <p>
          7.1. These Terms and Conditions are governed by and construed in
          accordance with the laws of [Jurisdiction], without regard to its
          conflict of law principles.
        </p>
      </div>

      <div className="cop">
        <h3>8. Contact Us</h3>
        <p>
          8.1. If you have any questions or concerns about these Terms and
          Conditions, please contact us at [contact email].
        </p>

        <p>
          Thank you for choosing Yonko as your partner in business. We look
          forward to working with you!
        </p>
      </div>

      <div className="cop">
        <p>
          We reserve the right to update and evolve, always striving to serve
          you better. Please note that changes may occur without prior notice
        </p>
      </div>
    </div>
  );
};

export default TermsandConditions;
