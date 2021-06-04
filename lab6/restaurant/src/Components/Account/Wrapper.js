import React from "react";
import HomePage from "./HomePage";
import UserProvider from "../../Providers/UserProvider";

function Wrapper() {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
}

export default Wrapper;