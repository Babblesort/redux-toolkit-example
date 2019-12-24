import * as bookService from '../../services/book-service';
import {
  fetchBooksBegan,
  fetchBooksSucceeded,
  fetchBooksFailed
} from './books-slice';

export const fetchBooks = () => async dispatch => {
  try {
    dispatch(fetchBooksBegan());
    const response = await bookService.getBooks();
    dispatch(fetchBooksSucceeded(response));
  } catch (error) {
    dispatch(fetchBooksFailed());
  }
};
