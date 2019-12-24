import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import booksReducer from './features/books/books-slice';

const rootReducer = combineReducers({ books: booksReducer });

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true
});
