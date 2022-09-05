import { Button, Card, Container, TextField, Box } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
import { ChekboxWithLabel } from "formik-material-ui";
import React, { useState } from "react";
import * as Yup from "yup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card>
        <Container>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              millionaire: false,
              money: 0,
              description: "",
            }}
            // validationSchema={Yup.object().shape({
            //   name: Yup.string().required("Name is required"),
            //   age: Yup.number().required("Age is required").min(18, "only +18"),
            //   description: Yup.string().min(10),
            // })}
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
                {/* <FormStps
                  isSubmitting={isSubmitting}
                  // validateField={validateField}
                  errors={errors}
                  touched={touched}
                > */}
                <Field
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  component={TextField}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.name}
                  // error={errors.name ? true : false}
                  // helperText={errors.name && errors.name}
                />
                <Field
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  component={TextField}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.name}
                  // error={errors.name ? true : false}
                  // helperText={errors.name && errors.name}
                />

                <Field
                  name="millionaire"
                  id="millionaire"
                  label="I am a millionaire"
                  component={ChekboxWithLabel}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.name}
                  // error={errors.name ? true : false}
                  // helperText={errors.name && errors.name}
                />

                <Field
                  name="money"
                  id="money"
                  label="Is Money :"
                  component={TextField}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.age}
                  // error={errors.age ? true : false}
                  // helperText={errors.age && errors.age}
                />
                <Field
                  name="description"
                  id="description"
                  label="Description"
                  component={TextField}
                  // onChange={handleChange}
                  // onBlur={handleBlur}
                  // value={values.description}
                  // error={errors.description ? true : false}
                  // helperText={errors.description && errors.description}
                />
                {/* </FormStps> */}
              </Form>
            )}
          </Formik>
        </Container>
      </Card>
    </div>
  );
}
// const FormStps = (props) => {
//   const childrenArr = React.Children.toArray(props.children);
//   const [step, setStep] = useState(1);
//   const name = childrenArr[step - 1].props.name;
//   const isErrors = props.errors[name] ? true : false;
//   const isTouched = props.touched[name] ? true : false;
//   const isEmpty = childrenArr[step - 1].props.value ? false : true;
//   const goBack = () => {
//     setStep(step - 1);
//   };
//   const goNext = () => {
//     if (isTouched && !isErrors) {
//       setStep(step + 1);
//     } else if (!isEmpty && !isErrors) {
//       setStep(step + 1);
//     } else {
//       props.validateField(name);
//     }
//   };
//   return (
//     <>
//       {childrenArr[step - 1]}
//       {step > 1 && (
//         <Button
//           disabled={props.isSubmitting}
//           variant="contained"
//           color="secondary"
//           onClick={goBack}
//         >
//           Back
//         </Button>
//       )}
//       {step < childrenArr.length && (
//         <Button
//           disabled={props.isSubmitting}
//           variant="contained"
//           onClick={goNext}
//         >
//           Next
//         </Button>
//       )}
//       <br />
//       {step === childrenArr.length && (
//         <Button
//           type="submit"
//           disabled={props.isSubmitting}
//           variant="contained"
//           color="primary"
//         >
//           Submit
//         </Button>
//       )}
//     </>
//   );
// };
export default App;
