import { APPLY_FILTER } from "../actions/filters";

const initialState = {
  hideCompleted: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default: return state;
  }
}
