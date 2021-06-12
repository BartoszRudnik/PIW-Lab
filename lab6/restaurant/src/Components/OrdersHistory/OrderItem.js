import React from "react";
import {
  ProductInfo2,
  ProductCard2,
  ProductPrice2,
  ProductPrice3,
} from "../ProductList/ProductsElements";

const OrderItem = ({ singleOrder }) => {
  const getOrderTotalPrice = (order) => {
    var totalPrice = 0;

    order.forEach((pizza) => {
      totalPrice += pizza.price * pizza.quantity;
    });

    return totalPrice;
  };

  return (
    <ProductCard2>
      <ProductInfo2>
        <ProductPrice3>Date of order: {singleOrder.date}</ProductPrice3>
        {singleOrder.order.map((pizza) => (
          <ProductPrice2 key={pizza.uniqueId}>
            {pizza.quantity}x {pizza.name}{" "}
            {(pizza.price * pizza.quantity).toFixed(2)}$
          </ProductPrice2>
        ))}
        <ProductPrice3>
          Order total price: {getOrderTotalPrice(singleOrder.order).toFixed(2)}$
        </ProductPrice3>
      </ProductInfo2>
    </ProductCard2>
  );
};

export default OrderItem;
