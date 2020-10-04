import React from 'react';
import { useHistory } from 'react-router-dom';
import { Message, Button } from "semantic-ui-react";

function Page404(props) {
  const history = useHistory();
  return (
    <Message negative>
      <Message.Header>404</Message.Header>
      <p>View Not found</p>
      <Button onClick={() => history.push('/')}> Go Home </Button>
    </Message>
  );
}

export default Page404;
