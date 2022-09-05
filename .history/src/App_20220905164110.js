import { Button, Card, Container, TextField, Box } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import "./App.css";

function App({ currentSteps, setCurrentSteps }) {
  const params = {
    currentSteps,
    setCurrentSteps,
  };
  return (
    <div className="App">
      <Card>
        <Container>
          <Formik
            initialValues={{ name: "", age: 18, description: "" }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Name is required"),
              age: Yup.number().required("Age is required").min(18, "only +18"),
              description: Yup.string().min(10),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              validateField,
              isSubmitting,
              /* and other goodies */
            }) => (
              <Form onSubmit={handleSubmit}>
                {state}
                <FormStps
                  isSubmitting={isSubmitting}
                  validateField={validateField}
                  errors={errors}
                  touched={touched}
                  {...params}
                >
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Your Name"
                    component={TextField}
                    error={errors.name ? true : false}
                    helperText={errors.name && errors.name}
                  />

                  <Field
                    type="number"
                    name="age"
                    id="age"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.age}
                    placeholder="Your age"
                    component={TextField}
                    error={errors.age ? true : false}
                    helperText={errors.age && errors.age}
                  />
                  <Field
                    type="text"
                    name="description"
                    id="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    placeholder="Description"
                    component={TextField}
                    error={errors.description ? true : false}
                    helperText={errors.description && errors.description}
                  />
                </FormStps>
              </Form>
            )}
          </Formik>
        </Container>
      </Card>
    </div>
  );
}
const FormStps = (props) => {
  const childrenArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(1);
  const name = childrenArr[step - 1].props.name;
  const isErrors = props.errors[name] ? true : false;
  const isTouched = props.touched[name] ? true : false;
  const isEmpty =
    childrenArr[step - 1].props.value !== " " &&
    !childrenArr[step - 1].props.value
      ? true
      : false;
  const goBack = () => {
    setStep(step - 1);
  };
  const goNext = () => {
    if (isTouched && !isErrors) {
      setStep(step + 1);
    } else if (!isEmpty && !isErrors) {
      setStep(step + 1);
    } else {
      props.validateField(name);
    }
  };
  return (
    <>
      {childrenArr[step - 1]}
      {step > 1 && (
        <Button
          disabled={props.isSubmitting}
          variant="contained"
          color="secondary"
          onClick={goBack}
        >
          Back
        </Button>
      )}
      {step < childrenArr.length && (
        <Button
          disabled={props.isSubmitting}
          variant="contained"
          onClick={goNext}
        >
          {props.state} Next
        </Button>
      )}
      <br />
      {step === childrenArr.length && (
        <Button
          type="submit"
          disabled={props.isSubmitting}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      )}
    </>
  );
};
export default App;
