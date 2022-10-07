import React, { useState, useEffect } from 'react';
import BookListComponent from './BookListComponent';

const PageComponent = ({ books, page }) => {
  const [onePageBooks, setOnePageBooks] = useState([]);
  const arr = [0, 1, 2, 3];
  useEffect(() => {
    setOnePageBooks(books.slice((page - 1) * 20, page * 20));
  }, [books, page]);
  return (
    <div className="w-full h-[90%]">
      {arr.map((number) => {
        return (
          <BookListComponent
            books={onePageBooks.slice(number * 5, (number + 1) * 5)}
          ></BookListComponent>
        );
      })}
    </div>
  );
};

export default PageComponent;
