import PRODUCTS from "../../data/dummy-data";

const intialState = {
  avaliableProduct: PRODUCTS,
  userProduct: PRODUCTS.filter(prod => prod.ownerId === "u1")
};

const reducer = (state = intialState, action) => {
  return state;
};

export default reducer;
