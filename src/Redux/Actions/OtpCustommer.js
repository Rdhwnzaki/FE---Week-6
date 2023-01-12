import axios from "axios";
import Swal from "sweetalert2";

export const otpCustommer = (data, navigate) => async (dispatch) => {
  try {
    console.log(data);
    dispatch({ type: "USER_VERIF_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_MY_API_KEY}/users/verif`,
      data
    );
    const user = result.data.message;
    console.log(user);
    dispatch({ type: "USER_VERIF_SUCCESS", payload: user });
    navigate("/loginCustommer");
    console.log("User Verif Success");
    Swal.fire("Success", "Verification success", "success");
  } catch (err) {
    console.log("User Verif Fail");
    console.log(err);
    Swal.fire("Warning", "Verification failed", "error");
  }
};
