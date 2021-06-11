import React, { useContext } from "react";
import { HeroBtn } from "../MainSection/MainSelectionElements";
import ProductList from "./ProductList";
import { firestore } from "../../firebase";
import { UserContext } from "../../Providers/UserProvider";
import { ProductsContainer2 } from "../ProductList/ProductsElements";
import { SideBarRoute, SideBtnWrap } from "../SideBar/SideBarElements";

const OrderNow = (props, {clearCart}) => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  const saveOrder = (orderList) => {
    firestore.collection("orders").add({ orderList, email });
  };

  const clear = () => {
    clearCart();
  };

  return props.location.state.actualOrder ? (
    <ProductsContainer2>
      <ProductList actualOrder={props.location.state.actualOrder} />
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
    </ProductsContainer2>
  ) : (
    <h1>Your cart is empty</h1>
  );
};

export default OrderNow;
