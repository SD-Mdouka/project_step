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
            validationSchema={Object({
              money: Yup.mixed().when("millionaire", {
                is: true,
                then: Yup.number()
                  .required()
                  .min(1_000_000, "But Plus the one millone"),
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
            {() => (
              <Form autoComplete="off">
                <Field
                  type="text"
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  component={TextField}
                />
                <Field
                  type="text"
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  component={TextField}
                />

                <Field
                  type="chekbox"
                  name="millionaire"
                  id="millionaire"
                  Label={{ label: "I'm a millionaire" }}
                  component={CheckboxWithLabel}
                />

                <Field
                  type="number"
                  name="money"
                  id="money"
                  label="All the money I have :"
                  component={TextField}
                />
                <Field
                  type="text"
                  name="description"
                  id="description"
                  label="Description"
                  component={TextField}
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
