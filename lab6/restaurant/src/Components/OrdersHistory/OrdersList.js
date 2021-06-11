import React, { useContext, useState } from "react";
import { OrderContext } from "../../Providers/OrderProvider";
import { UserContext } from "../../Providers/UserProvider";
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
