import React from 'react';
import { useMouseCoordinates } from "./useMouseCoordinates";
import PostList from "./PostList";

function MouseTracker() {

  const { x, y } =  useMouseCoordinates();

  return (
    <div>
      x: {x}
      <br/> <br/>
      y: {y}
      <br/> <br/>
      Custom Hook Pool list
      <PostList />
    </div>
  );
}

export default MouseTracker;
