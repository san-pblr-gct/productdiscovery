import React from "react";
import styled from "styled-components";

const ProductStyled = styled.article`
  border-radius: 5px;
  padding: 10px;
  background: var(--lightgray);
  max-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ImageStyled = styled.img`
  width: 150px;
  height: 200px;
  background-size: cover;
  background-position: center;
  align-self: center;
`;
const DetailStyled = styled.div`
  padding: 0.5rem 0;
`;

function Product({ item }) {
  return (
    <ProductStyled>
      <ImageStyled src={`${item.get("searchImage")}`} alt=""></ImageStyled>
      <DetailStyled>
        <p>ProductName: {item.get("productName")}</p>
        <p>Category: {item.get("category")}</p>
        <p>MRP: {item.get("mrp")}</p>
        <p>Price: {item.get("price")}</p>
      </DetailStyled>
      <p>{item.get("description")}</p>
    </ProductStyled>
  );
}

export default Product;
