export const SET_PRODUCTS = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const SET_PRODUCT_BY_ID = (product) => {
  return {
    type: SET_PRODUCT_BY_ID,
    payload: product,
  };
};

export const ADD_PRODUCT = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const DELETE_PRODUCT = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const EDIT_PRODUCT = (product) => {
  return {
    type: EDIT_PRODUCT,
    payload: product,
  };
};
