export const booksReducer = (state, action) => {
  console.log("in reducer");
  switch (action.type) {
    case "CHANGE_CATEGORY":
      const updatedBooks = [...state.allBooks].map((book) => {
        if (book.id === action.payload.book_id) {
          book.category = action.payload.selectedCategory;
        }
        return book;
      });
      return { ...state, allBooks: updatedBooks };

    case "SEARCH_BOOKS":
      const foundBooks = state.allBooks.filter((book) =>
        book.title.toLowerCase().includes(action.payload.toLowerCase())
      );
      return { ...state, SearchedBooks: foundBooks };

    default:
      return { state };
  }
};
