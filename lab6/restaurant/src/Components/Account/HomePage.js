import React, { useContext } from "react";
import ProfilePage from "./ProfilePage";
import { UserContext } from "../../Providers/UserProvider";
import { SideBarLink } from "../SideBar/SideBarElements";

function HomePage() {
  const user = useContext(UserContext);

  return !user ? (
    <>
      <SideBarLink to="/signIn">Sign in</SideBarLink>
      <SideBarLink to="/signUp">Sign up</SideBarLink>
      <SideBarLink to="/resetPassword">Reset Password</SideBarLink>
    </>
  ) : (
    <ProfilePage />
  );
}

export default HomePage;
