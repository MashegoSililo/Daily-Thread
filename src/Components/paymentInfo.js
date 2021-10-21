import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const PaymentInfo = ({ setModalState }) => {
//   const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setModalState(true);
        //   setTimeout(() => {
        //     setUser(values.name);
        //     setSubmitting(false);
        //     window.location.replace("/");
        //     return <Username user={user} />;
        //   }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{paddingLeft:'25%'}}>
            <h4>Username</h4>
            <Field type="text" name="name" />
            <ErrorMessage component="div" name="name" className="err" />
            <h4>Email</h4>
            <Field type="email" name="email" />
            <ErrorMessage component="div" name="email" className="err" />
            <h4> Shipping Address:</h4>
            <Field type="address" name="address" />
            <ErrorMessage component="div" name="address" className="err" />
            <br></br><br></br>
            <h4>Card Details:</h4>
            <h4>Bank Card</h4>
            <Field type="text" name="card-number" />
            <ErrorMessage component="div" name="card-number" className="err" />
            <h4>Card Number </h4>
            <Field type="text" name="card-number" />
            <ErrorMessage component="div" name="card-number" className="err" />
            <h4> CVV number </h4>
            <Field type="text" name="card-number" />
            <ErrorMessage component="div" name="card-number" className="err" />
            <br></br>
            <br></br>
            <button className="formBtns" type="submit" disabled={isSubmitting}>
              Checkout
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PaymentInfo;
