import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import { auth } from "../../firebase";
import { SideBtnWrap, SideBarRoute } from "../SideBar/SideBarElements";

const ProfilePage = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  return (
    <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="md:pl-4">
        <h2 className="text-2xl font-semibold">{displayName}</h2>
        <h3 className="italic">{email}</h3>
      </div>
      <SideBtnWrap
        onClick={() => {
          auth.signOut();
        }}
      >
        <SideBarRoute>Sign out</SideBarRoute>
      </SideBtnWrap>
    </div>
  );
};

export default ProfilePage;
