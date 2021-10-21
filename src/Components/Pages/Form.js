import React, { useState, useEffect, useContext } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserContext } from "../UserContext";
import { Username } from "../Utilities/User";

export const Account = () => {
  // Conditional Rendering of Login/ Create Account Forms
  var sentence = true;
  const [isDefault, setIsDefault] = useState(true);
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    if (sentence) {
      setIsDefault(true);
    } else {
      setIsDefault(false);
    }
  }, [setIsDefault, sentence]);

  if (isDefault) {
    const handleClick = () => {
      setIsDefault(false);
    };
    return (
      <div className="page">
        {/* <div style={{background: '#191716'}}>k</div>
        <div style={{background: '#E6AF2E'}}>l</div>
        <div style={{background: '#E0E2DB'}}>m</div>
        <div style={{background: '#136F63'}}>n</div>
        <div style={{background: '#941B0C'}}>0</div> */}

        <button onClick={handleClick} className='formBtns'>Go to Login </button>
        {modalState && <Modal content='Account successfully created!' setModalState={setModalState} />}
        <h3>Or</h3>
        <h1>Create Account</h1>
        <CreateAccount setModalState={setModalState} />
      </div>
    );
  }

  if (!isDefault) {
    const handleClick = () => {
      setIsDefault(true);
    };
    return (
      <div className="page">
        <button onClick={handleClick} className='formBtns'>Create an Account </button>
        {modalState && <Modal content='Login successful' setModalState={setModalState}/>}
        <LogIntoAccount />
      </div>
    );
  }
  return <div>{sentence}</div>;
};

export const CreateAccount = ({setModalState} ) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          age: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "This field is required.";
          } else if (values.name.length <= 1) {
            errors.name = "Name is required to be more than one character.";
          }
          if (!values.age) {
            errors.age = "This field is required.";
          }
          if (!values.email) {
            errors.email = "This field is required.";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = `Passwords don't match.`;
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setModalState(true);
          setTimeout(() => {
            
            setUser(values.name);
            setSubmitting(false);
            
            <Username user={user} />;
            
            
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <h4>Full Name</h4>
            <Field type="text" name="name" />
            <ErrorMessage component="div" name="name" className="err" />
            <h4>Email</h4>
            <Field type="email" name="email" />
            <ErrorMessage component="div" name="email" className="err" />
            <h4>Age</h4>
            <Field type="number" name="age" min="13" max="100" />
            <ErrorMessage component="div" name="password" className="err" />

            <h4>Password</h4>
            <Field type="password" name="password" />
            <ErrorMessage component="div" name="password" className="err" />
            <h4>Confirm Password</h4>
            <Field type="password" name="confirmPassword" />
            <ErrorMessage
              component="div"
              name="confirmPassword"
              className="err"
            />
            <br></br>
            <br></br>
            <button className='formBtns' type="submit" disabled={isSubmitting}>
              Create Account
              
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const LogIntoAccount = ( {setModalState}) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login</h1>
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
          setTimeout(() => {
            setUser(values.name);
            setSubmitting(false);
            window.location.replace('/')
            return <Username user={user} />;
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form >
            <h4>Username</h4>
            <Field type="text" name="name" />
            <ErrorMessage component="div" name="name" className="err" />
            <h4>Email</h4>
            <Field type="email" name="email" />
            <ErrorMessage component="div" name="email" className="err" />
            <h4>Password</h4>
            <Field type="password" name="password" />
            <ErrorMessage component="div" name="password" className="err" />
            <br></br>
            <br></br>
            <button className='formBtns' type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const Modal =({setModalState, content})=> {
  useEffect(()=>{
    setTimeout(()=>{
      setModalState(false)
    }, 3000)
  } )

  return <div style={{ padding: '1%', marginLeft: '75%', background: 'tan'}}>
    <p>{content} </p>
  </div>
}
