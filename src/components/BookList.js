import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../features/books/actions';
import Book from './Book';
import {
  getList,
  getIsLoading,
  getHasLoadingError,
  getListCountDisplay
} from '../features/books/selectors';

const BookList = () => {
  const books = useSelector(getList);
  const booksCountDisplay = useSelector(getListCountDisplay);
  const isLoading = useSelector(getIsLoading);
  const hasLoadingError = useSelector(getHasLoadingError);
  const dispatch = useDispatch();
  const loadBooks = () => dispatch(fetchBooks());

  return (
    <div>
      <h1>Books</h1>
      <h2>{booksCountDisplay}</h2>
      <button type="button" onClick={loadBooks} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Load Books'}
      </button>
      {hasLoadingError && 'Error loading books'}
      <ul>
        {books.map(b => (
          <Book book={b} key={b.title} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
