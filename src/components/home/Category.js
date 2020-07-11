import React from "react";

import styled from "styled-components";
import { searchProducts } from "../../actions-creators/products";
import { useDispatch } from "react-redux";

const CategoryStyled = styled.button`
  border-radius: 5px;
  padding: 10px;
  background: var(--lightgray);
  margin: 10px;
`;

function Category({ items, selectedCategory }) {
  const dispatch = useDispatch();
  return (
    <div
      style={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
    >
      <CategoryStyled>All</CategoryStyled>
      {items &&
        items.map((item) => {
          return (
            <CategoryStyled
              key={item}
              onClick={() => {
                selectedCategory !== item
                  ? dispatch(searchProducts(item))
                  : dispatch(searchProducts(""));
              }}
            >
              {item}
            </CategoryStyled>
          );
        })}
    </div>
  );
}

export default Category;
