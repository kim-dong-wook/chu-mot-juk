import React from 'react';
import {
  BooksContainer,
  BooksPoster,
  BooksRow,
  BooksTitle,
} from './Books.styles';

const Books = ({ title, books }) => {
  return (
    <BooksContainer>
      <BooksTitle>{title}</BooksTitle>
      <BooksRow>
        {books.map((book) => (
          <BooksPoster
            key={book.id}
            src={'https://image.tmdb.org/t/p/w300' + book.poster_path}
            alt={book.name}
          />
        ))}
      </BooksRow>
    </BooksContainer>
  );
};

export default Books;
