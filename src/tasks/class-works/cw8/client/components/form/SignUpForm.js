import React from 'react';
import axios from 'axios';
import { Button, Input } from 'semantic-ui-react'
import { reduxForm, Field } from 'redux-form'
import './SignUoForm.css';
import TextField from "./TextField";

function SignUpForm({ handleSubmit, valid, submitting }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <Field name='email' label='Email' component={TextField} placeholder='john.doe@email.com' />
      </div>
      <div className='form-row'>
        <Field name='password' label='Password' component={TextField} placeholder='****' type='password'/>
      </div>
      <div className='form-row'>
        <Field name='repeatPassword' label='Repeat Password' component={TextField} placeholder='****' type='password' />
      </div>
      <div className='form-row'>
        <Field name='first_name'  label='First Name' component={TextField} placeholder='John' />
      </div>
      <div className='form-row'>
        <Field name='last_name' label='Last Name' component={TextField} placeholder='Doe' />
      </div>
      <div className='form-row'>
        <Field name='age' label='Age' component={TextField} placeholder='18' />
      </div>
      <Button type="submit" disabled={!valid && !submitting}>Sign Up</Button>
    </form>
  );
}

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required'
  }
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(values.email)) {
    errors.email = 'Wrong email format!'
  }
  if (!values.first_name) {
    errors.first_name = 'Required'
  }
  if (!values.last_name) {
    errors.last_name = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  if (values.password !== values.repeatPassword) {
    errors.password = 'Password don\'t match'
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (values.age > 50) {
    warnings.age = 'You are old!'
  }
  return warnings;
};


const asyncValidate = async values => {
  if (!values.email) return;
  const response = await axios.get(`http://localhost:3001/api/signup/is_exist?email=${values.email}`);
  if (response.data.is_exist) {
    throw { email: 'This email is already taken' }
  }
};

export default reduxForm({
  form: 'signup',
  warn,
  validate,
  asyncValidate,
  asyncBlurFields: ['email']
})(SignUpForm);
