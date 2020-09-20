import React, { useEffect, useState, useMemo, useContext, useRef } from 'react';
import { Form, Radio } from "semantic-ui-react";
import ThemeContext from "./context/ThemeContext";


// componentDidUpdate(prevProps) {
//   if (prevProps.number !== this.props.number) {
//     console.log('USE EFFECT NUMBER');
//   }
// }

export function EntityList({ type, user }) {

  const theme = useContext(ThemeContext);

  const [entities, setEntities] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState(false);

  useEffect(() => {
    console.log('CURRENT TYPE', type);
    setIsFetchingData(true);
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(posts => {
        setEntities(posts);
        setIsFetchingData(false)
      })
  }, [type]);

  useEffect(() => {
    console.log('USER ROLE IS', user.role);
  }, [user]);


  return (
    <>
      {isFetchingData && <div>Loading...</div>}
      <ul style={{
        backgroundColor: theme === 'light' ? 'whitesmoke' : 'black',
        color: theme === 'light' ? 'black' : 'white'
      }}>
        {entities.map(entity => <li>{entity.title}</li>)}
      </ul>
    </>
  )
}


function ExampleUseEffect({ number, name }) {

  const [currentType, setCurrentType] = useState('posts');
  const user = useMemo(() => {
    return {
      role: name === 'admin' ? 'admin' : 'user'
    }
  }, [number]);


  return (
    <div>
      <Form>
        <Form.Field>
          Selected value: <b>{currentType}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Posts type component'
            name='radioGroup'
            value='this'
            checked={currentType === 'posts'}
            onChange={() => setCurrentType('posts')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Todos type component'
            name='radioGroup'
            value='todos'
            checked={currentType === 'todos'}
            onChange={() => setCurrentType('todos')}
          />
        </Form.Field>
      </Form>
      <EntityList type={currentType} user={user} />
    </div>
  );
}

export default ExampleUseEffect;
