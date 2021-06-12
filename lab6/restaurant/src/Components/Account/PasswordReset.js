import React, { useState } from "react";
import { auth } from "../../firebase";
import { SideBarRoute, SideBtnWrap } from "../SideBar/SideBarElements";
import { ProductsContainer3 } from "../ProductList/ProductsElements";
import { TextWrapper2 } from "../ProductList/ProductsElements";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      setEmail(value);
    }
  };

  const sendResetEmail = (event) => {
    event.preventDefault();

    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailSent(true);
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);
      })
      .catch(() => {
        setError("Error reseting password");
      });
  };

  return (
    <ProductsContainer3>
      <div className="mt-8">
        <h1 className="text-xl text-center font-bold mb-3">
          Reset your Password
        </h1>
        <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
          <form action="">
            {emailSent && (
              <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
                An email has been sent to you!
              </div>
            )}
            {error !== null && (
              <div className="py-3 bg-red-600 w-full text-white text-center mb-3">
                {error}
              </div>
            )}
            <label htmlFor="userEmail" className="w-full block">
              Email:
            </label>
            <TextWrapper2>
              <input
                type="email"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Input your email"
                onChange={onChangeHandler}
                className="mb-3 w-full px-1 py-2"
              />
            </TextWrapper2>
            <button
              className="w-full bg-blue-400 text-white py-3"
              onClick={(event) => {
                sendResetEmail(event);
              }}
            >
              Send me a reset link
            </button>
          </form>

          <SideBtnWrap>
            <SideBarRoute
              to="/signIn"
              className="my-2 text-blue-700 hover:text-blue-800 text-center block"
            >
              &larr; back to sign in page
            </SideBarRoute>
          </SideBtnWrap>
          <SideBtnWrap>
            <SideBarRoute
              to="/"
              className="my-2 text-blue-700 hover:text-blue-800 text-center block"
            >
              &larr; back to main page
            </SideBarRoute>
          </SideBtnWrap>
        </div>
      </div>
    </ProductsContainer3>
  );
};

export default PasswordReset;
