import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_MY_API_KEY}/users/login`,
      data
    );
    const user = result.data.message;
    console.log(user);
    localStorage.setItem("token", user.token);
    localStorage.setItem("role", user.role_user);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/profile-seller");
    console.log("User Login Success");
    Swal.fire("Success", "Login success", "success");
  } catch (err) {
    console.log("User Login Fail");
    console.log(err);
    Swal.fire("Warning", "Login failed", "error");
  }
};
