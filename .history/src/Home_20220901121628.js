import { Button, Card, Container, TextField, Box } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import React, { useState } from "react";
import * as Yup from "yup";
import "./App.css";

function Home() {
  return (
    <div className="App">
      <Card>
        <Container>
          <Formik
            validationSchema={Yup.object().shape({
              money: Yup.number()
                .required("Age is required")
                .min(18, "only +18"),
            })}
            initialValues={{
              firstName: "",
              lastName: "",
              millionaire: false,
              money: 0,
              description: "",
            }}
            onSubmit={() => {}}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Form autoComplete="off">
                <Field
                  name="firstName"
                  label="First Name"
                  component={TextField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name}
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  component={TextField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name}
                />

                <Field
                  type="chekbox"
                  name="millionaire"
                  Label={{ label: "I'm a millionaire" }}
                  component={CheckboxWithLabel}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name}
                />

                <Field
                  type="number"
                  name="money"
                  label="All the money I have :"
                  component={TextField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.money ? true : false}
                  helperText={errors.money && errors.money}
                />
                <Field
                  name="description"
                  label="Description"
                  component={TextField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.money ? true : false}
                  helperText={errors.money && errors.money}
                />
              </Form>
            )}
          </Formik>
        </Container>
      </Card>
    </div>
  );
}

export default Home;
