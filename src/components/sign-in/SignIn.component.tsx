import React, { Component } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import CustomButton from "../custom-button/CustomButton.component";

import { SignInContainer, SignInTitle, SignInSubtitle } from "./SignIn.styles";

import {
  CustomFieldContainer,
  CustomFieldInput,
  CustomFieldLabel
} from "../form/CustomField.styles";

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  password: Yup.string().required("Password is required")
});

class SignIn extends Component<{}, FormValues> {
  capitalizeFirstCharacter = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  render() {
    const email = "email";
    const password = "password";
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <SignInSubtitle>Sign in with your email and password</SignInSubtitle>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values: FormValues, { setSubmitting }) => {
            if (values) {
              setSubmitting(true);
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <CustomFieldContainer>
                <CustomFieldInput
                  type={email}
                  name={email}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CustomFieldLabel
                  className={values.password.length ? "shrink" : ""}
                >
                  {this.capitalizeFirstCharacter(email)}
                </CustomFieldLabel>
                <ErrorMessage name={email} />
              </CustomFieldContainer>

              <CustomFieldContainer>
                <CustomFieldInput
                  type={password}
                  name={password}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CustomFieldLabel
                  className={values.password.length ? "shrink" : ""}
                >
                  {this.capitalizeFirstCharacter(password)}
                </CustomFieldLabel>
                <ErrorMessage name={password} />
              </CustomFieldContainer>

              <CustomButton type="submit">Sign In</CustomButton>
            </Form>
          )}
        </Formik>
      </SignInContainer>
    );
  }
}

export default SignIn;
