import React from "react";
import { useSelector } from "react-redux";

import "../Styles/checkout.css";

import CheckoutCart from "./CheckoutCart";

const Checkout = () => {
  const { basket } = useSelector((cart) => cart.cartReducer);
  console.log(basket);
  const c = 0;
  return (
    <div className="checkout">
      {basket.map((item) => (
        <CheckoutCart
          key={item.id}
          id={item.id}
          c={c}
          category={item.category}
          image={item.image}
          price={item.price}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Checkout;
