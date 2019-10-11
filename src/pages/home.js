import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Product from "../components/home/Product";

import { setProducts } from "../actions-creators/products";
import ProductData from "../data/data.json";
import Category from "../components/home/Category";

const ProductsStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 47px;
`;

const CategoriesStyled = styled.div`
  postion: fixed;
  background: var(--darkgray);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  width: 96%;
  background: var(--darkgray);
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;

const h1Styled = styled.h1`
  display: flex;
`;

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.getIn(["products", "data"]));
  const results = useSelector(state => state.getIn(["products", "results"]));
  const categories = useSelector(state => state.getIn(["categories", "data"]));
  const selectedCategory = useSelector(state =>
    state.getIn(["categories", "selectedCategory"])
  );
  const productsList = results && results.size ? results : products;

  useEffect(() => {
    async function fetchData() {
      // const response = await fetch(
      //   "https://www.myntra.com/web/v1/search/black?p=1&rows=100&o=0",
      //   {
      //     method: "GET",
      //     headers: {
      //       "Access-Control-Allow-Credentials": true,
      //       "Access-Control-Allow-Origin": "*",
      //       "Access-Control-Allow-Methods": "GET",
      //       "Access-Control-Allow-Headers": "application/json"
      //     }
      //   }
      // );

      const data = ProductData;
      dispatch(setProducts(data.products));
    }
    if (!products.size) fetchData();
  }, []);

  return (
    <div>
      <HeaderStyled>
        <h1>10xConnect</h1>
      </HeaderStyled>
      <CategoriesStyled>
        <Category items={categories} selectedCategory={selectedCategory} />
      </CategoriesStyled>

      <ProductsStyled>
        {productsList.map(item => (
          <Product key={item.get("code")} item={item} />
        ))}
      </ProductsStyled>
    </div>
  );
}

export default Home;
