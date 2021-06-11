import React, { useContext, useState } from "react";
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

  const addOrder = (order) => {
    setFilteredOrders((filteredOrders) => [...filteredOrders, order]);
  };

  const filterOrders = (user, orders) => {
    setFilteredOrders([]);

    if (user != null) {
      const { photoURL, displayName, email } = user;

      const userEmail = email;

      if (userEmail != null) {
        orders.forEach((order) => {
          const { email, orderList } = order;
          if (email === userEmail) {
            addOrder(orderList);
            console.log(filteredOrders);
          }
        });
      }
    }
  };

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <HomePage />

      {user && (
        <SideBtnWrap
          onClick={() => {
            filterOrders(user, orders);
          }}
        >
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
