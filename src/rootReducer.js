import { combineReducers } from 'redux';
import booksReducer from './features/books/reducer';

export default combineReducers({ books: booksReducer });
