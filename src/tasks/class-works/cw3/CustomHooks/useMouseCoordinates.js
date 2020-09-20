import { useState, useEffect } from 'react';


export function useMouseCoordinates() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const onMouseMove = e => {
      setX(e.pageX);
      setY(e.pageY);
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => { // componentWillUnmount
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, []); // componentDidMount() - if not empty can be considered as componentDidUpdate()


  return { x, y };
}




