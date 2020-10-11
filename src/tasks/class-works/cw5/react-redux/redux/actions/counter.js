export const INCREMENT = 'INCREMENT'; // action type
export const DECREMENT = 'DECREMENT';


export const increment = () => ({      // action creator
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});
