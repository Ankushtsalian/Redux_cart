export const addtoCart = (items) => {
  return {
    type: "add",
    payload: items,
  };
};

export const setProducts = (products) => {
  return {
    type: "Products",
    payload: products,
  };
};

export const setSearch = (event) => {
  return {
    type: "filter",
    payload: event,
  };
};

export const Remove = () => {
  return <div>Remove</div>;
};
