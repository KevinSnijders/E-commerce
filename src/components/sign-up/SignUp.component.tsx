import React, { Component } from "react";

import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import CustomButton from "../custom-button/CustomButton.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import {
  CustomFieldContainer,
  CustomFieldInput,
  CustomFieldLabel
} from "../form/CustomField.styles";

import { SignUpContainer, SignUpTitle, SignUpSubtitle } from "./SignUp.styles";

interface FormValues {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  displayName: Yup.string().required("Display name is required"),
  email: Yup.string()
    .email("Email not valid")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters "),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required")
});

class SignUp extends Component<{}, FormValues> {
  componentDidMount() {
    return null;
  }

  render() {
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <SignUpSubtitle>Sign up with your email and password</SignUpSubtitle>
        <Formik
          initialValues={{
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validationSchema}
          onSubmit={async (
            values: FormValues,
            { setSubmitting, resetForm }
          ) => {
            if (values) {
              setSubmitting(true);
              const { user } = await auth.createUserWithEmailAndPassword(
                values.email,
                values.password
              );
              createUserProfileDocument(user, {
                displayName: values.displayName
              });
              resetForm();
              setSubmitting(false);
            }
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <CustomFieldContainer>
                <CustomFieldInput
                  type="input"
                  name="displayName"
                  value={values.displayName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CustomFieldLabel
                  className={values.displayName.length ? "shrink" : ""}
                >
                  Display Name
                </CustomFieldLabel>
                <ErrorMessage name="displayName" />
              </CustomFieldContainer>

              <CustomFieldContainer>
                <CustomFieldInput
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CustomFieldLabel
                  className={values.email.length ? "shrink" : ""}
                >
                  Email
                </CustomFieldLabel>
                <ErrorMessage name="email" />
              </CustomFieldContainer>
              <CustomFieldContainer>
                <CustomFieldInput
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CustomFieldLabel
                  className={values.password.length ? "shrink" : ""}
                >
                  Password
                </CustomFieldLabel>
                <ErrorMessage name="password" />
              </CustomFieldContainer>

              <CustomFieldContainer>
                <CustomFieldInput
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <CustomFieldLabel
                  className={values.confirmPassword.length ? "shrink" : ""}
                >
                  Confirm Password
                </CustomFieldLabel>
                <ErrorMessage name="confirmPassword" />
              </CustomFieldContainer>
              <CustomButton type="submit">SIGN UP</CustomButton>
            </Form>
          )}
        </Formik>
      </SignUpContainer>
    );
  }
}

export default SignUp;
