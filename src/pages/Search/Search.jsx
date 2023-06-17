import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../context/BookContext";
import { categories } from "../../db/categories";

const Search = () => {
  const { state, dispatch } = useContext(BookContext);
  return (
    <div>
      <div>
        <Link to="/">
          <button>Back To Main</button>
        </Link>
      </div>
      <input
        type="search"
        onChange={(e) => {
          dispatch({ type: "SEARCH_BOOKS", payload: e.target.value });
        }}
        placeholder="Search Books"
      />
      <div>
        {state.SearchedBooks.map((book) => (
          <div>
            <img src="" />
            <p>Title: {book.title}</p>
            <p>Author: {book.title}</p>
            {/* <CategoryDropdown bookId/> */}
            {/* <button onClick={}>
                        <i class="fa fa-solid fa-caret-down"></i>
                      </button> */}
            <select
              onChange={(e) => {
                dispatch({
                  type: "CHANGE_CATEGORY",
                  payload: {
                    book_id: book.id,
                    selectedCategory: e.target.value,
                  },
                });
              }}
            >
              <option disabled>Move To</option>
              {categories.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
