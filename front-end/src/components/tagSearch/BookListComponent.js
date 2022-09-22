import React, { useEffect } from 'react';

const BookListComponent = ({ books }) => {
  const arr = [1, 2, 3];
  useEffect(() => {
    console.log(books);
  }, []);

  return (
    <div className="flex w-full h-[30.1rem] justify-between">
      {books.map((book) => (
        <div className="w-[18%] h-[100%]">
          <img src={book.src} alt="" className="w-full h-[66%]"></img>
          <div>{book.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BookListComponent;
