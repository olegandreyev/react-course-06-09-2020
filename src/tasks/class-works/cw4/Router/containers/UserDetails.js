import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom'
import { Card, Icon, Loader } from "semantic-ui-react";

const extraData = (
  <a>
    <Icon name='user' />
    16 Albums
  </a>
);

function UserDetails() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(user => {
        setUserDetails(user);
      })
  }, [userId]);

  if (userDetails === null) return <Loader size='small' active />;

  if (!userDetails.id) {
    return <Redirect to='/'/>
  }

  return (
    <div className='user-details-page'>
      <Card
        image='https://react.semantic-ui.com/images/avatar/large/elliot.jpg'
        header={userDetails.name}
        meta={userDetails.company.name}
        description={userDetails.email}
      />
    </div>
  );
}

export default UserDetails;
