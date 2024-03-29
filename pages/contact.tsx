import { ErrorMessage, Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";

type SubmitStatus = "initial" | "success" | "error";

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
    "Due to unforseen phenomena in the space-time continuum your name is limited to 50 characters."
  ),
  email: Yup.string()
    .email("That's not a valid email!")
    .required("Your email is required so I can reply to you!"),
  body: Yup.string()
    .max(250, "Woah! Any more and I probably won't read it!")
    .required("Give me something to work with!"),
});

const onSubmit = async (
  values: Values,
  setSubmitSuccess: (status: SubmitStatus) => void
) => {
  const subject =
    values.name === ""
      ? `${values.email} wants to talk to you`
      : `${values.name} wants to talk to you`;
  try {
    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "whatever",
      },
      body: JSON.stringify({ subject, ...values }),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.details);
    }
    setSubmitSuccess("success");
  } catch (error) {
    console.error(error);
    setSubmitSuccess("error");
  }
};

const Input = ({ field, form: { errors, touched }, ...props }) => {
  const className = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
    touched[field.name] && errors[field.name] && "border-red-400"
  }`;
  return props.rows ? (
    <textarea className={className} {...field} {...props} />
  ) : (
    <input className={className} {...field} {...props} />
  );
};

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("initial");
  if (submitStatus === "success") {
    return <SubmitSuccess setReset={() => setSubmitStatus("initial")} />;
  }

  return (
    <div className="w-full max-w-xs">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => onSubmit(values, setSubmitStatus)}
      >
        {({ isSubmitting, isValid }) => (
          <Form
            className={`mb-4 rounded-xl bg-white px-8 pt-6 pb-8 shadow-md ${
              submitStatus === "error" ? "border-2 border-red-400" : ""
            }`}
          >
            <div className="mb-4">
              <Field
                name="name"
                placeholder="What's your name?"
                component={Input}
              />
              <ErrorMessage
                name="name"
                component="span"
                className="text-sm italic text-red-400"
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
                className="italic text-red-400"
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
                className="italic text-red-400"
              />
            </div>

            {submitStatus === "error" && (
              <div className="mb-2 text-red-400">
                Uh oh! There was an error sending your message.
              </div>
            )}

            <div>
              <button
                className={`w-full justify-center rounded border border-transparent py-2 px-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 ${
                  submitStatus === "error"
                    ? "bg-red-500 hover:bg-red-600 focus:ring-red-400 disabled:hover:bg-red-500"
                    : "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 disabled:hover:bg-indigo-600"
                }`}
                type="submit"
                disabled={!isValid || isSubmitting}
              >
                {submitStatus === "error" ? "Try again?" : "Hit me up!"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const SubmitSuccess: React.FC<{ setReset: () => void }> = ({ setReset }) => {
  return (
    <div className="w-full max-w-xs">
      <div className="mb-4 rounded-xl bg-white px-8 pt-6 pb-8 shadow-md">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-2 text-indigo-600">Thanks for reaching out!</div>
          <div className="mb-4 text-sm text-indigo-400">
            I&apos;ll try to get back to you as soon as possible!
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={setReset}
            className="rounded border border-transparent bg-indigo-600 py-2 px-4 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            Do it again?
          </button>
        </div>
      </div>
    </div>
  );
};
