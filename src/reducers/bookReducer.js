import { GET_BOOKS, ADD_BOOK } from '../actions/bookActions';

export const initialState = {
  books: [],
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload],
      };

    default:
      return state;
  }
}