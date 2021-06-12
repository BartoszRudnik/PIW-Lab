import React, { useContext } from "react";
import ProductList from "./ProductList";
import { firestore } from "../../firebase";
import { UserContext } from "../../Providers/UserProvider";
import {
  ProductsContainer2,
  ProductsHeading2,
  ProductCard2,
  ProductPrice3,
  ProductWrapper,
} from "../ProductList/ProductsElements";
import { SideBarRoute, SideBtnWrap } from "../SideBar/SideBarElements";

const OrderNow = (props) => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  const saveOrder = (orderList) => {
    const today = new Date();
    const date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear() +
      " " +
      today.getHours() +
      ":" +
      today.getMinutes();

    if (orderList.length > 0) {
      firestore.collection("orders").add({ orderList, email, date });
    }
  };

  const clear = () => {
    props.clearCart();
  };

  const calculateTotalPrice = () => {
    var totalPrice = 0;

    props.location.state.actualOrder.forEach((pizza) => {
      totalPrice += pizza.price * pizza.quantity;
    });

    return totalPrice;
  };

  return (
    <ProductsContainer2>
      <ProductsHeading2>Your cart:</ProductsHeading2>
      <ProductWrapper>
        <ProductList actualOrder={props.location.state.actualOrder} />
      </ProductWrapper>
      <ProductWrapper>
        <ProductCard2>
          <ProductPrice3>
            Total price: {calculateTotalPrice().toFixed(2)} $
          </ProductPrice3>
        </ProductCard2>
      </ProductWrapper>
      <ProductWrapper>
        <SideBtnWrap
          onClick={() => {
            saveOrder(props.location.state.actualOrder);
            clear();
          }}
        >
          <SideBarRoute
            to={{
              pathname: "/",
            }}
          >
            Place Order
          </SideBarRoute>
        </SideBtnWrap>

        <SideBtnWrap
          onClick={() => {
            clear();
          }}
        >
          <SideBarRoute
            to={{
              pathname: "/",
            }}
          >
            Clear cart
          </SideBarRoute>
        </SideBtnWrap>

        <SideBtnWrap>
          <SideBarRoute
            to={{
              pathname: "/",
            }}
          >
            Back to main screen
          </SideBarRoute>
        </SideBtnWrap>
      </ProductWrapper>
    </ProductsContainer2>
  );
};

export default OrderNow;
