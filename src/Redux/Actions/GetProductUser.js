import axios from "axios";

export const fetchProductUser = (data, user) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_PENDING" });
    const result = await axios.get(
      `http://localhost:3000/products/product-user`,
      data,
      user
    );
    const product = result.data.data;
    console.log(product);
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: product });
    console.log("Fetch Data Success");
  } catch (err) {
    console.log("Fetch Data Fail");
    console.log(err);
  }
};
