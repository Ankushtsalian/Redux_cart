const initialState = {
  products: [],
  search: "",
  filter: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Products":
      return { ...state, products: action.payload };
    case "filter":
      return {
        ...state,
        search: action.payload.value,
        filter: state.products.filter((item) =>
          item.title.toLowerCase().includes(action.payload.value.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

const cart = {
  basket: [],
  remove: [],
};

export const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case "add":
      return {
        basket: [...state.basket, action.payload],
      };
    case "remove":
      const index = state.basket.indexOf(action.payload);
      const newBasket = [...state.basket];
      newBasket.splice(index, 1);

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};
