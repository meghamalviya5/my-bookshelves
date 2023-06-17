import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { categories } from "../../db/categories";
import { BookContext } from "../../context/BookContext";
import CategoryDropdown from "../../component/CategoryDropdown";

const Main = () => {
  const { state, dispatch } = useContext(BookContext);
  return (
    <div>
      <div>
        <Link to="/search">
          <button>Search</button>
        </Link>
      </div>
      <div>
        {categories
          .filter((item) => item !== "None")
          .map((showCategory) => (
            <div>
              <h1>{showCategory}</h1>
              {/* {console.log("showCategory - ", showCategory)} */}
              <div>
                {state.allBooks
                  .filter((book) => {
                    // console.log(" book.category - ", book.category);
                    return book.category === showCategory;
                  })
                  .map((filteredBooks) => (
                    <div>
                      <img src="" />
                      <p>Title: {filteredBooks.title}</p>
                      <p>Author: {filteredBooks.author}</p>
                      {/* <CategoryDropdown bookId/> */}
                      {/* <button onClick={}>
                        <i class="fa fa-solid fa-caret-down"></i>
                      </button> */}
                      <select
                        onChange={(e) => {
                          dispatch({
                            type: "CHANGE_CATEGORY",
                            payload: {
                              book_id: filteredBooks.id,
                              selectedCategory: e.target.value,
                            },
                          });
                        }}
                      >
                        <option disabled>Move To</option>
                        {categories.map((category) => (
                          <option
                            value={category}
                            selected={filteredBooks.category === category}
                          >
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
