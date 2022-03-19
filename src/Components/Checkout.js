import React from "react";
import { useSelector } from "react-redux";

import "../Styles/checkout.css";

import CheckoutCart from "./CheckoutCart";

const Checkout = () => {
  const { basket } = useSelector((cart) => cart.cartReducer);
  console.log(basket);
  return (
    <div className="checkout">
      {basket.map((item) => (
        <CheckoutCart
          key={item.id}
          id={item.id}
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
