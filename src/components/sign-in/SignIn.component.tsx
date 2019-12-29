import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SignInContainer, SignInTitle, SignInSubtitle } from "./SignIn.styles";

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
              <Field
                type={email}
                name={email}
                placeholder={this.capitalizeFirstCharacter(email)}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name={email} />
              <Field
                type={password}
                name={password}
                placeholder={this.capitalizeFirstCharacter(password)}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage name={password} />
              <button type="submit">Sign In</button>
            </Form>
          )}
        </Formik>
      </SignInContainer>
    );
  }
}

export default SignIn;
