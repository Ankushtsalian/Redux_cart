import React from "react";
// import Carousel from "react-material-ui-carousel";
import { useSelector } from "react-redux";

import "../Styles/checkout.css";

import CheckoutCart from "./CheckoutCart";

const Checkout = () => {
  const { basket } = useSelector((cart) => cart.cartReducer);

  return (
    <div>
      {/* <Carousel className="checkout"> */}
      <div className="corousel">
        {basket.map((item) => (
          <CheckoutCart
            item={item}
            key={item.id}
            id={item.id}
            category={item.category}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        ))}
      </div>
      {/* </Carousel> */}
    </div>
  );
};

export default Checkout;
