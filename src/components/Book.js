import React from 'react';

const Book = ({ book }) => (
  <li>
    {book.title}
    <br />
    {book.author}
    <br />
    {book.published}
  </li>
);

export default Book;
