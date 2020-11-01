import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { Container, Header, Message } from "semantic-ui-react";
import SignUpForm from "../components/form/SignUpForm";

function SignUp(props) {

  const [succes, setSuccess] = useState(false);

  const onSubmit = useCallback(async values => {
    await axios.post('http://localhost:3001/api/signup', values);
    setSuccess(true);
  }, []);

  return (
    <Container>
      <Header as='h2'>Sign Up Page</Header>
      {!succes && <SignUpForm onSubmit={onSubmit} initialValues={{first_name: 'Oleh', last_name: 'Test', age: 18}} />}
      {succes &&  <Message positive>
        <Message.Header>You are eligible for a reward</Message.Header>
        <p>
          Go to your <b>special offers</b> page to see now.
        </p>
      </Message>}
    </Container>
  );
}

export default SignUp;
