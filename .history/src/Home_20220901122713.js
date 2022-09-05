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
              money: Yup.mixed().when("millionaire", {
                is: true,
                then: Yup.number()
                  .required("Age is required")
                  .min(1_000_000, "only + one millione"),
                otherwise: Yup.number().required(),
              }),
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
                  error={errors.firstName ? true : false}
                  helperText={errors.firstName && errors.firstName}
                />
                <Field
                  name="lastName"
                  label="Last Name"
                  component={TextField}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && errors.lastName}
                />

                <Field
                  type="chekbox"
                  name="millionaire"
                  Label={{ label: "I'm a millionaire" }}
                  component={CheckboxWithLabel}
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
                  error={errors.description ? true : false}
                  helperText={errors.description && errors.description}
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
