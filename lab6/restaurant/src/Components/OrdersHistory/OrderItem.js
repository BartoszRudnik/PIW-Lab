import React from "react";

const OrderItem = ({ singleOrder }) => {
  return singleOrder.map((pizza) => (
    <div key={pizza.uniqueId}>
      <h1>
        {pizza.name} {pizza.price} {pizza.quantity}
      </h1>
    </div>
  ));
};

export default OrderItem;
