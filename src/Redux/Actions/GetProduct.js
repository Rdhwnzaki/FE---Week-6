import axios from "axios";

export const fetchProduct = (data) => async (dispatch) => {
  try {
    dispatch({ type: "FETCH_DATA_PENDING" });
    const result = await axios.get(`${process.env.REACT_APP_MY_API_KEY}`, data);
    const product = result.data.data;
    console.log(product);
    // localStorage.setItem("token",product.name_product)
    dispatch({ type: "FETCH_DATA_SUCCESS", payload: product });
    console.log("Fetch Data Success");
  } catch (err) {
    console.log("Fetch Data Fail");
    console.log(err);
  }
};
