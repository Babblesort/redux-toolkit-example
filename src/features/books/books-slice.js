import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
    hasError: false
  },
  reducers: {
    fetchBooksBegan: state => ({
      ...state,
      isLoading: true,
      hasError: false
    }),
    fetchBooksSucceeded: (state, action) => ({
      ...state,
      books: [...action.payload],
      isLoading: false,
      hasError: false
    }),
    fetchBooksFailed: state => ({
      ...state,
      isLoading: false,
      hasError: true
    })
  }
});

export const {
  fetchBooksBegan,
  fetchBooksSucceeded,
  fetchBooksFailed
} = booksSlice.actions;

export default booksSlice.reducer;
