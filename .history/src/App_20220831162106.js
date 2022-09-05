import { Card, Container, TextField } from "@material-ui/core";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
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
                />

                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Container>
      </Card>
    </div>
  );
}

export default App;
