export const initialState = {
  counter: 0,
}

// state -> anything inside of reducer, action -> manipulating the data layer
export default function reducer(state, action) {
  switch(action.type) {
    case 'INCREASE_NUMBER':
      return { ...state, counter: state.counter + 1 };
    case 'DECREASE_NUMBER':
      // Logic for removing desired state
      break;
    default:
      return state;
  }
}