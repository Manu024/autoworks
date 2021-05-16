import React, { useState, useEffect } from "react";
import {
  OrdersContainer,
  OrdersListHeading,
  OrdersListItems,
  OrdersTrackingItem,
  OrdersTrackingStatus,
  OrdersTrackingWrapper,
  OrdersWrapper,
  OrdersHeading,
  OrdersTrackingSymbol,
  Icon,
  OrdersError,
} from "./UserOrdersElements";
import axios from "axios";

const UserOrders = ({ email }) => {
  const [orderListItems, setOrderListItems] = useState();
  const [orderTracking, setOrderTracking] = useState();

  let orders = [];

  const fetchOrders = async () => {
    const response = await axios.get(`/orders?email=${email}`);
    orders = response.data.data;
    if (orders.length > 0 && response) {
      setOrderListItems(
        orders.map((order) => (
          <OrdersListItems
            key={order._id}
            onClick={() => updateTracking(order._id)}
          >
            {order.model} - ₹ {order.total_cost} -{" "}
            {new Date(order.date).toString()}
          </OrdersListItems>
        ))
      );
      updateTracking(orders[0]._id);
      return;
    } else if (response.status === 404) {
      updateTracking("User not found");
      return;
    }
    updateTracking("Make orders to view");
  };

  const updateTracking = (id = null, status = null) => {
    if (status !== null) {
      setOrderListItems(
        <OrdersError style={{ color: "#fff" }}>{status}</OrdersError>
      );
      return;
    }
    orders.filter((order) => {
      if (order._id === id) {
        return setOrderTracking(
          <OrdersTrackingStatus>
            <OrdersTrackingItem status={order.status === "pending" ? 1 : 0}>
              <Icon>
                <OrdersTrackingSymbol
                  status={order.status === "pending" ? 1 : 0}
                />
              </Icon>
              Pending
            </OrdersTrackingItem>
            <OrdersTrackingItem status={order.status === "processing" ? 1 : 0}>
              <Icon>
                <OrdersTrackingSymbol
                  status={order.status === "processing" ? 1 : 0}
                />
              </Icon>
              Processing
            </OrdersTrackingItem>
            <OrdersTrackingItem
              status={order.status === "out_for_delivery" ? 1 : 0}
            >
              <Icon>
                <OrdersTrackingSymbol
                  status={order.status === "out_for_delivery" ? 1 : 0}
                />
              </Icon>
              Ready for delivery
            </OrdersTrackingItem>
            <OrdersTrackingItem status={order.status === "delivered" ? 1 : 0}>
              <Icon>
                <OrdersTrackingSymbol
                  status={order.status === "delivered" ? 1 : 0}
                />
              </Icon>
              Delivered
            </OrdersTrackingItem>
          </OrdersTrackingStatus>
        );
      }
    });
  };

  useEffect(() => fetchOrders(), []);
  useEffect(() => [orderTracking]);

  return (
    <OrdersContainer>
      <OrdersWrapper>
        <OrdersListHeading>List of Orders</OrdersListHeading>
        {orderListItems}
      </OrdersWrapper>
      <OrdersTrackingWrapper>
        <OrdersHeading>Status of Order</OrdersHeading>
        {orderTracking}
      </OrdersTrackingWrapper>
    </OrdersContainer>
  );
};

export default UserOrders;
