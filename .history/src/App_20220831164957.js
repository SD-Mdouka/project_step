import { Button, Card, Container, TextField, Box } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
  return (
    <Box mt={10}>
      <div className="App">
        <Card>
          <Container>
            <Formik
              initialValues={{ name: "", age: 18, description: "" }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                age: Yup.number()
                  .required("Age is required")
                  .min(18, "only +18"),
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
                isSubmitting,
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit}>
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

                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Container>
        </Card>
      </div>
    </Box>
  );
}

export default App;
