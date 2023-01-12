import axios from "axios";
import Swal from "sweetalert2";

export const regisUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_MY_API_KEY}/users/register/toko`,
      data
    );
    const user = result.data.data;
    console.log(user);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/otp");
    console.log("User Register Success");
    Swal.fire("Success", "Register success", "success");
  } catch (err) {
    console.log("User Register Fail");
    console.log(err);
    Swal.fire("Warning", "Register failed", "error");
  }
};
