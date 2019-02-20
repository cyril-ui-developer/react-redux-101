import { FETCH_POSTS, CREATE_NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case CREATE_NEW_POST:
      return {
        item: action.payload,
        state: [...state.items, action.payload]
      };
    default:
      return state;
  }
}