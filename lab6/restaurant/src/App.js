import React from "react";
import HomePage from "./Components/HomePage";
import UserProvider from "./Providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <HomePage />
    </UserProvider>
  );
}

export default App;
