import React, { useEffect, useS } from "react";
import { useUser } from "@clerk/clerk-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import Navbar from "../Navbar/Navbar";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../MainHome/Home/Footer";

const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Federal Capital Territory",
];

const UserForm = () => {
  const { user } = useUser();

  const initialValues = {
    email: user?.emailAddresses?.[0]?.emailAddress || "",
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    state: "",
    city: "",
  };

  useEffect(() => {
    // Prefill the form fields with the user's information from Clerk
    initialValues.email = user?.emailAddresses?.[0]?.emailAddress || "";
    initialValues.firstName = user?.firstName || "";
    initialValues.lastName = user?.lastName || "";
  }, [user]);

  const validationSchema = Yup.object().shape({
    phoneNumber: Yup.string().required("Phone number is required"),
    postalCode: Yup.string().required("Postal code is required"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
  });

  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://yonkouser-8fa96d682806.herokuapp.com/api"
      : "http://localhost:3002/api";

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values);
      const response = await axios.post(`${API_URL}/users`, values);
      console.log("User saved successfully:", response.data);
      setSubmitting(false);
    } catch (error) {
      console.error("Error saving user:", error);
      setSubmitting(false);
    }
  };

  if (!user) {
    // User is not authenticated, so redirect to login page or show an error message
    return <div>User not authenticated</div>;
  }

  return (
    <div className="userout">
      <Navbar />

      <div className="userform">
        <div className="back">
          <a href="/">
            <IoMdArrowRoundBack className="iconback" />
          </a>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <div className="users">
              <Form className="form">
                <div className="mail">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" className="each" readOnly />
                </div>

                <div className="mail">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="each"
                    readOnly
                  />
                </div>

                <div className="mail">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    className="each"
                    readOnly
                  />
                </div>

                <div className="mail">
                  <label htmlFor="phoneNumber">Phone</label>
                  <PhoneInput
                    international
                    defaultCountry="NG"
                    value={initialValues.phoneNumber}
                    onChange={(phoneNumber) =>
                      setFieldValue("phoneNumber", phoneNumber)
                    }
                    className="phonein"
                  />
                  <ErrorMessage name="phoneNumber" component="div" />
                </div>

                <div className="mail">
                  <label htmlFor="address">Address</label>
                  <Field
                    type="text"
                    name="address"
                    className="each"
                    placeholder="123 Diamond Ave"
                  />
                </div>

                <div className="mail">
                  <label htmlFor="postalCode">Postal Code</label>
                  <Field
                    type="text"
                    name="postalCode"
                    className="each"
                    placeholder="900123"
                  />
                  <ErrorMessage name="postalCode" component="div" />
                </div>

                <div className="mail">
                  <label htmlFor="state">State</label>

                  <Field as="select" name="state" className="each">
                    <option value="">Select a state</option>
                    {nigeriaStates.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="state" component="div" />
                </div>

                <div className="mail">
                  <label htmlFor="city">City</label>
                  <Field
                    type="text"
                    name="city"
                    className="each"
                    placeholder="Abuja"
                  />
                  <ErrorMessage name="city" component="div" />
                </div>

                <div className="btn">
                  <button type="submit" disabled={isSubmitting}>
                    Save
                  </button>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>

      <Footer />
    </div>
  );
};

export default UserForm;
