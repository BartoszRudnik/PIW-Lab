import React from "react";
import OrderItem from "./OrderItem";

const OrdersList = (props) => {
  return props.location.state.orderList.map((order) => (
    <div>
      <h1>------------------</h1>
      <OrderItem singleOrder={order} />
    </div>
  ));
};

export default OrdersList;
