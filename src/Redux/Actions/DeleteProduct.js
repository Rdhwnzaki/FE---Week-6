import axios from "axios";
import { useState } from "react";

export const DeleteProduct = (data, navigate) => async (dispatch) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected] = useState(null);
    dispatch({ type: "DELETE_DATA_PENDING" });
    const result = await axios.delete(
      `${process.env.REACT_APP_MY_API_KEY}/${selected}`,
      data
    );
    const product = result.data.message;
    console.log(product);
    // localStorage.setItem("token",user.token)
    dispatch({ type: "DELETE_DATA_SUCCESS", payload: product });
    // navigate('/profile')
    console.log("Delete Data Success");
  } catch (err) {
    console.log("Delete Data Fail");
    console.log(err);
  }
};
