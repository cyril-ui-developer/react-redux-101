import { FETCH_POSTS, CREATE_NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  userData:[],
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
        items: [...state.items, action.payload],
        userData: [...state.items, action.payload],
      };
    default:
      return state;
  }
}