import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from './thunks';
import Book from './Book';
import {
  getList,
  getIsLoading,
  getHasLoadingError,
  getListCountDisplay
} from './selectors';
import './book-list.css';

const BookList = () => {
  const books = useSelector(getList);
  const booksCountDisplay = useSelector(getListCountDisplay);
  const isLoading = useSelector(getIsLoading);
  const hasLoadingError = useSelector(getHasLoadingError);
  const dispatch = useDispatch();
  const loadBooks = () => dispatch(fetchBooks());

  return (
    <div>
      <div className="books-list-header">
        <h1>Books</h1>
        <h2>{booksCountDisplay}</h2>
        <button
          className="books-list-load-button"
          type="button"
          onClick={loadBooks}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Load Books'}
        </button>
      </div>
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
