import {
  FETCH_BOOKS_BEGAN,
  FETCH_BOOKS_SUCCEEDED,
  FETCH_BOOKS_FAILED
} from './actions';

export const initialState = () => ({
  books: [],
  isLoading: false,
  hasError: false
});

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case FETCH_BOOKS_BEGAN:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };

    case FETCH_BOOKS_SUCCEEDED:
      return {
        ...state,
        books: [...action.payload],
        isLoading: false,
        hasError: false
      };

    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    default:
      return state;
  }
};

export default reducer;
