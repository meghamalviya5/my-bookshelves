import React, { useContext } from "react";
import { categories } from "../db/categories";
import { BookContext } from "../context/BookContext";
import { useParams } from "react-router-dom";

const CategoryDropdown = () => {
  const [dispatch] = useContext(BookContext);
  const { bookId } = useParams();

  return (
    <div>
      CategoryDropdown
      <select
        onChange={(e) => {
          dispatch({
            type: "CHANGE_CATEGORY",
            payload: { book_id: bookId, selectedCategory: e.target.value },
          });
        }}
      >
        <option disabled>Move To</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
