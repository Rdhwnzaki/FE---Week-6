import React from "react";
import Avatar from "@mui/material/Avatar";
import avatar from "../../image/avatar.png";
import { Link } from "react-router-dom";
const AvatarImage = () => {
  const role = localStorage.getItem("role");
  return (
    <div>
      {role === "custommer" ? (
        <Link to="/profile-custommer">
          <Avatar alt="Remy Sharp" src={avatar} />
        </Link>
      ) : (
        <Link to="/profile-seller">
          <Avatar alt="Remy Sharp" src={avatar} />
        </Link>
      )}
    </div>
  );
};
export default AvatarImage;
