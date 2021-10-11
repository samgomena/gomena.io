import { ErrorMessage, Formik, Form, Field } from "formik";
import * as Yup from "yup";

type Values = {
  name: string;
  email: string;
  body: string;
};

const initialValues: Values = {
  name: "",
  email: "",
  body: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().max(
    50,
    "Due to unforeseen circumstances your name is limited to 50 characters."
  ),
  email: Yup.string()
    .email("That's not a valid email!")
    .required("Your email is required so I can reply to you!"),
  body: Yup.string()
    .max(250, "Woah! Any more and I probably won't read it!")
    .required("Give me something to work with!"),
});

const onSubmit = async (values, { setSubmitting }) => {
  const subject =
    values.name === ""
      ? `${values.email} wants to talk to you`
      : `${values.name} wants to talk to you`;
  const res = await fetch("/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "whatever",
    },
    body: JSON.stringify({ subject, ...values }),
  });
  const json = await res.json();
  console.log(json);
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const Input = ({ field, form: { errors }, ...props }) => {
  const className = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
    errors[field.name] && "border-red-400"
  }`;
  return props.rows ? (
    <textarea className={className} {...field} {...props} />
  ) : (
    <input className={className} {...field} {...props} />
  );
};

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-xs">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting, isValid }) => (
            <Form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <Field
                  name="name"
                  placeholder="What's your name?"
                  component={Input}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className="text-red-400 italic text-sm"
                />
              </div>

              <div className="mb-4">
                <Field
                  name="email"
                  placeholder="What's your email?"
                  component={Input}
                />
                <ErrorMessage
                  name="email"
                  component="span"
                  className="text-red-400 italic"
                />
              </div>

              <div className="mb-4">
                <Field
                  name="body"
                  as="textarea"
                  rows={5}
                  placeholder="Talk to me"
                  component={Input}
                />
                <ErrorMessage
                  name="body"
                  component="span"
                  className="text-red-400 italic"
                />
              </div>

              <div>
                <button
                  className="py-2 px-4 border border-transparent shadow-sm rounded bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Hit me up!
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
