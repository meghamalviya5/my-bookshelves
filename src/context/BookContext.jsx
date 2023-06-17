import { createContext, useReducer } from "react";
import { books } from "../db/books";
import { booksReducer } from "../reducer/BookReducer";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  console.log("books  ---- ", books);
  const initialState = { allBooks: books, SearchedBooks: [] };

  const [state, dispatch] = useReducer(booksReducer, initialState);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
