import React, { useContext, useState, useEffect } from "react";
import { OrderContext } from "../../Providers/OrderProvider";
import { UserContext } from "../../Providers/UserProvider";
import HomePage from "../Account/HomePage";

import {
  Icon,
  CloseIcon,
  SideBarContainer,
  SideBarRoute,
  SideBtnWrap,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle, actualOrder, clearCart }) => {
  const [filteredOrders, setFilteredOrders] = useState([]);

  const orders = useContext(OrderContext);
  const user = useContext(UserContext);

  const addOrder = (order, date) => {
    const newOrder = { order, date };

    setFilteredOrders((filteredOrders) => [...filteredOrders, newOrder]);
  };

  const filterOrders = (user, orders) => {
    setFilteredOrders([]);

    if (user != null) {
      const { photoURL, displayName, email } = user;

      const userEmail = email;

      if (userEmail != null) {
        orders.forEach((order) => {
          const { email, orderList, date } = order;
          if (email === userEmail) {
            addOrder(orderList, date);
          }
        });
      }
    }
  };

  useEffect(() => {
    filterOrders(user, orders);
  }, [user, orders]);

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <HomePage />

      {user && (
        <SideBtnWrap>
          <SideBarRoute
            to={{
              pathname: "/ordersHistory",
              state: { orderList: filteredOrders },
            }}
          >
            Orders History
          </SideBarRoute>
        </SideBtnWrap>
      )}
      {user && (
        <SideBtnWrap>
          <SideBarRoute
            to={{
              pathname: "/orderNow",
              state: { actualOrder: actualOrder },
            }}
          >
            Order Now
          </SideBarRoute>
        </SideBtnWrap>
      )}
    </SideBarContainer>
  );
};

export default SideBar;
