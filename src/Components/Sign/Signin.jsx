// SignInn.jsx

import React from "react";

import { useNavigate } from "react-router-dom";

const SignInn = () => {
  const navigate = useNavigate();

  const handleSignUpSuccess = async (username) => {
    localStorage.setItem("username", username);
    navigate("/");
  };

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          {
            type: "username",
            label: "Username",
            placeholder: "Enter your username",
            required: true,
          },
          {
            type: "password",
            label: "Password",
            placeholder: "Enter your password",
            required: true,
          },
          {
            type: "email",
            label: "Email Address",
            placeholder: "Enter your email address",
            required: true,
          },
          {
            type: "name",
            label: "Name",
            placeholder: "Enter your name",
            required: true,
          },
          {
            type: "address",
            label: "Address",
            placeholder: "Enter your address",
            required: true,
          },
          {
            type: "family_name",
            label: "Family Name",
            placeholder: "Enter your family name",
            required: true,
          },
          {
            type: "preferred_username",
            label: "Preferred Username",
            placeholder: "Enter your preferred username",
            required: true,
          },
          {
            type: "gender",
            label: "Gender",
            placeholder: "Enter your gender",
            required: true,
          },
          {
            type: "phone_number",
            label: "Phone Number",
            placeholder: "Enter your phone number",
            required: true,
          },
        ]}
        handleSignUp={async (formData) => {
          try {
            await Auth.signUp({
              username: formData.username,
              password: formData.password,
              attributes: {
                email: formData.email,
                name: formData.name,
                address: formData.address,
                family_name: formData.family_name,
                preferred_username: formData.preferred_username,
                gender: formData.gender,
                phone_number: formData.phone_number,
              },
            });
            handleSignUpSuccess(formData.username);
          } catch (error) {
            console.error("Error signing up:", error);
          }
        }}
      />
    </AmplifyAuthenticator>
  );
};

export default SignInn;
