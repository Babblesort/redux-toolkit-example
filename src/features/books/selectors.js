import { createSelector } from 'reselect';

const booksSlice = state => propName => state.books[propName];

const bookCount = (list = []) => list.length;
const bookCountDisplay = count =>
  count === 0 ? 'No Books Loaded' : `${count} Books Loaded`;

export const getList = state => booksSlice(state)('books');
export const getIsLoading = state => booksSlice(state)('isLoading');
export const getHasLoadingError = state => booksSlice(state)('hasLoadingError');

export const getListCount = createSelector([getList], bookCount);
export const getListCountDisplay = createSelector(
  [getListCount],
  bookCountDisplay
);
