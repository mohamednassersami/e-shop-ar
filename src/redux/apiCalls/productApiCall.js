import {
  getProducts,
  getProduct,
  setLoading,
  clearLoading,
} from "../slices/productSlice";

export function fetchProducts() {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      dispatch(getProducts(data));
      dispatch(clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(clearLoading());
    }
  };
}

// Fetch Single Product By Id
export function fetchSingleProduct(productId) {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await fetch(
        `http://localhost:5000/products/${productId}`
      );
      const data = await response.json();
      dispatch(getProduct(data));
      dispatch(clearLoading());
    } catch (error) {
      console.log(error);
      dispatch(clearLoading());
    }
  };
}
