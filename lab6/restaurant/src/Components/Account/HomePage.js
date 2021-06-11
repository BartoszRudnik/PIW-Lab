import React, { useContext } from "react";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../../Providers/UserProvider";
import { SideBtnWrap, SideBarRoute } from "../SideBar/SideBarElements";

function HomePage() {
  const user = useContext(UserContext);

  return !user ? (
    <>
      <SideBtnWrap>
        <SideBarRoute to="/signIn">Sign in</SideBarRoute>
      </SideBtnWrap>

      <SideBtnWrap>
        <SideBarRoute to="/signUp">Sign up</SideBarRoute>
      </SideBtnWrap>

      <SideBtnWrap>
        <SideBarRoute to="/resetPassword">Reset Password</SideBarRoute>
      </SideBtnWrap>
    </>
  ) : (
    <ProfilePage />
  );
}

export default HomePage;
