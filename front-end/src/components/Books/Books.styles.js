import tw, { styled } from 'twin.macro';

export const BooksContainer = styled.div`
  ${tw`
    my-8
  `}
`;

export const BooksTitle = styled.h2`
  ${tw`
      text-2xl
      font-bold
      uppercase
      mx-8
    `}
`;

export const BooksRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-4
      p-4
    `}

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BooksPoster = styled.img`
  ${tw`
    m-2
    w-40
  `}

  // Scale the movie img when the user hovers on it.
  transition: all 0.2s;
  &:hover {
    transform: scale(2);
  }
`;
