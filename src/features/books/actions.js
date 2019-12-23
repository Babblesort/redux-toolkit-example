import * as bookService from '../../services/book-service';

export const FETCH_BOOKS_BEGAN = 'books/fetchBegan';
export const FETCH_BOOKS_SUCCEEDED = 'books/fetchSucceeded';
export const FETCH_BOOKS_FAILED = 'books/fetchFailed';

export const fetchBooksBegan = () => ({
  type: FETCH_BOOKS_BEGAN
});

export const fetchBooksSucceeded = books => ({
  type: FETCH_BOOKS_SUCCEEDED,
  payload: books
});

export const fetchBooksFailed = message => ({
  type: FETCH_BOOKS_FAILED,
  message
});

export const fetchBooks = () => async dispatch => {
  try {
    dispatch(fetchBooksBegan());
    const response = await bookService.getBooks();
    dispatch(fetchBooksSucceeded(response));
  } catch (error) {
    dispatch(fetchBooksFailed(error.message));
  }
};
