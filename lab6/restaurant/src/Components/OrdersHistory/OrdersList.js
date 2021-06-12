import React from "react";
import OrderItem from "./OrderItem";
import {
  ProductsContainer2,
  ProductsHeading2,
  ProductWrapper,
} from "../ProductList/ProductsElements";
import { SideBarRoute, SideBtnWrap } from "../SideBar/SideBarElements";

const OrdersList = (props) => {
  return (
    <ProductsContainer2>
      <ProductsHeading2>Orders history</ProductsHeading2>
      <ProductWrapper>
        {props.location.state.orderList.map((order) => (
          <OrderItem singleOrder={order} />
        ))}
      </ProductWrapper>
      <ProductWrapper>
        <SideBtnWrap>
          <SideBarRoute
            to={{
              pathname: "/",
            }}
          >
            Back to main page
          </SideBarRoute>
        </SideBtnWrap>
      </ProductWrapper>
    </ProductsContainer2>
  );
};

export default OrdersList;
