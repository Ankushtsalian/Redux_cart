import React, { lazy } from "react";

import "../Styles/Cards.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/actions/actions";
import useDebounce from "../Hooks/useDebounce";
const Cards = lazy(() => import("./Cards"));

const Products = () => {
  const dispatch = useDispatch();
  const { search, products, filter } = useSelector((state) => state.Reducer);
  const debouncedSaerch = useDebounce(search, 1700);
  const debouncedfilter = useDebounce(filter, 1000);

  async function productApi() {
    const response = await fetch("https://fakestoreapi.com/products");
    const product = await response.json();

    dispatch(setProducts(product));
  }

  useEffect(() => productApi(), []);

  return (
    <div className="card">
      {(debouncedSaerch === "" ? products : debouncedfilter).map((item) => (
        <Cards
          item={item}
          key={item.id}
          id={item.id}
          category={item.category}
          image={item.image}
          description={item.description}
          price={item.price}
          title={item.title}
          rate={item.rating.rate}
        />
      ))}
    </div>
  );
};

export default Products;
