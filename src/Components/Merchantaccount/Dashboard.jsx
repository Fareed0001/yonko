import React, { useState, useEffect } from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReactModal from "react-modal";
import TermsandConditions from "./TermsandConditions";

const Dashboard = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const [vendors, setVendors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Remove AWS-related code

  const initialValues = {
    storeName: "",
    contactName: "",
    phone: "",
    address: "",
    businessType: "",
    storeType: "",
    subscriptionPlan: "",
    totalPrice: 0,
  };

  const validationSchema = Yup.object().shape({
    storeName: Yup.string().required("Store name is required"),
    contactName: Yup.string().required("Contact name is required"),
    phone: Yup.string().required("Phone number is required"),
    address: Yup.string().required("Address is required"),
    storeType: Yup.string().required("Store type is required"),
    subscriptionPlan: Yup.string().required("Subscription plan is required"),
  });

  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://yonkovendor.herokuapp.com"
      : "http://localhost:3001";

  const fetchVendors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/vendors`);
      if (response.status === 200) {
        setVendors(response.data);
      } else {
        console.error("Error fetching vendors:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching vendors:", error);
    }
  };

  useEffect(() => {
    fetchVendors();
  }, []);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Calculate total price
      let totalPrice = 0;
      switch (values.subscriptionPlan) {
        case "monthly":
          totalPrice = 1000;
          break;
        case "everyThreeMonths":
          totalPrice = 2500;
          break;
        case "everySixMonths":
          totalPrice = 5000;
          break;
        case "annually":
          totalPrice = 10000;
          break;
        default:
          totalPrice = 0;
      }

      // Prepare vendor data without saving it yet
      const vendorData = {
        ...values,
        email: user.emailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
        Vendors: user.id,
        products: [],
        subscriptionPlan: values.subscriptionPlan,
        totalPrice,
      };

      // Navigate to the payment page with vendor data as state
      navigate("/vendor-payment", { state: { vendorData } });
    } catch (error) {
      console.error("Error preparing vendor data:", error);
      setSubmitting(false);
    }
  };

  if (!user) {
    return <div>User not authenticated</div>;
  }

  const username =
    user.username || user.emailAddress || user.firstName || "User";

  const handleSignOut = async () => {
    await signOut();
    navigate("/vendor");
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {username}!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="formgroup">
              <label htmlFor="storeName">Store Name</label>
              <Field type="text" name="storeName" />
              <ErrorMessage name="storeName" component="div" />
            </div>
            <div className="formgroup">
              <label htmlFor="contactName">Contact Name</label>
              <Field type="text" name="contactName" />
              <ErrorMessage name="contactName" component="div" />
            </div>
            <div className="formgroup">
              <label htmlFor="phone">Phone Number</label>
              <PhoneInput
                international
                defaultCountry="NG"
                value={initialValues.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
              />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div className="formgroup">
              <div className="ad">
                <label htmlFor="address">Address</label>
              </div>
              <Field type="text" name="address" />
              <ErrorMessage name="address" component="div" />
            </div>
            <div className="formgroup">
              <label htmlFor="storeType">Store Type</label>
              <Field as="select" name="storeType">
                <option value="">Select a store type</option>
                <option value="Restaurant(online/ physical)">
                  Restaurant(online/ physical)
                </option>
                <option value="Medicine and Pharmacy">
                  Medicine and Pharmacy
                </option>
                <option value="Grocery & Supermarket">
                  Grocery & Supermarket
                </option>
                <option value="Pet Supplies(online/ physical)">
                  Pet Supplies(online/ physical)
                </option>
                <option value="Beauty Cosmetics(online/ physical)">
                  Beauty Cosmetics(online/ physical)
                </option>
                <option value="Home Accessories(online/ physical)">
                  Home Accessories (online/ physical)
                </option>
                <option value="Tech Accessories(online/ physical)">
                  Tech Accessories(online/ physical)
                </option>
                <option value="Clothing(online/ physical)">
                  Clothing(online/ physical)
                </option>
                <option value="Plant Supplies(online/ physical)">
                  Plant Supplies(online/ physical)
                </option>
              </Field>
              <ErrorMessage name="storeType" component="div" />
            </div>
            <div className="formgroup">
              <label htmlFor="subscriptionPlan">Subscription Plan</label>
              <Field as="select" name="subscriptionPlan">
                <option value="">Select a subscription plan</option>
                <option value="monthly">Monthly - ₦1000</option>
                <option value="everyThreeMonths">Every 3 Months - ₦2500</option>
                <option value="everySixMonths">Every 6 Months - ₦5000</option>
                <option value="annually">Annually - ₦10000</option>
              </Field>
              <ErrorMessage name="subscriptionPlan" component="div" />
            </div>

            <p>
              By submitting this form, you acknowledge that you have read,
              understood, and agreed to the
              <button onClick={() => setShowModal(true)}>
                terms and conditions
              </button>
              of Yonko.
            </p>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <button type="button" onClick={handleSignOut}>
        Sign Out
      </button>

      <ReactModal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Terms and Conditions"
      >
        <button onClick={() => setShowModal(false)}>Close</button>

        <TermsandConditions />
      </ReactModal>
    </div>
  );
};

export default Dashboard;
