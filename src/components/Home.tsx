import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../sclices/userLoginSlice";
import { getAuth, signOut } from "firebase/auth";

function Home() {
  const auth = getAuth();

  const [userLoginInfo, setUserLoginInfo] = useState({});
  const dispatch = useDispatch();
  const { userName, userEmail, phoneNumber, profileImage } = useSelector(
    (state) => state && state.userInfo
  );
  const history = useNavigate();

  const handleLogout = () => {
    history("/");
    dispatch(
      userInfo({
        userName: "",
        userEmail: "",
        token: "",
        phoneNumber: "",
        profileImage: "",
      })
    );
  };
  return (
    <div>
      <div>
        <h1>{userName}</h1>
        <h2>{userEmail}</h2>
        <img src={profileImage} style={{ height: "500", width: "500" }} />
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
