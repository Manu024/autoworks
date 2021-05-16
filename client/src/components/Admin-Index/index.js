import React, { useState } from "react";
import {
  AdminIndexContainer,
  AdminIndexCustomerDetail,
  AdminIndexCustomerOrdersList,
  AdminIndexCustomerOrdersItem,
  AdminIndexCustomerWrapper,
  AdminIndexEditServices,
  AdminIndexHeaderWrapper,
  AdminIndexHeading,
  AdminIndexCustomerOrdersWrapper,
  AdminIndexSearchbar,
  AdminIndexSearchbarWrapper,
  AdminIndexCustomerHeading,
  AdminIndexCustomerOrdersHeading,
  Icon,
  SearchIcon,
} from "./AdminIndexElements";
import axios from "axios";
import UpdateForm from "../UpdateForm";

const AdminIndex = ({ toggleClick }) => {
  const [orders, setOrders] = useState();
  const [customerDetail, setCustomerDetail] = useState();
  const [form, setForm] = useState(false);

  const toggleForm = async (id) => {
    setForm(!form);
  };

  const fetchOrdersHandler = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    axios
      .get(`/user?email=${email}`)
      .then((res) => {
        const data = res.data;
        setCustomerDetail(
          <AdminIndexCustomerWrapper>
            <AdminIndexCustomerHeading>
              Customer Details
            </AdminIndexCustomerHeading>
            <AdminIndexCustomerDetail>
              Name: {res.data.name}
            </AdminIndexCustomerDetail>
            <AdminIndexCustomerDetail>
              Email: {res.data.email}
            </AdminIndexCustomerDetail>
          </AdminIndexCustomerWrapper>
        );

        setOrders(
          data.orders.map((order, index) => {
            return (
              <AdminIndexCustomerOrdersItem
                key={index}
                onClick={() => toggleForm(order._id)}
              >
                {order.model} - {order.phone} - {order.status} -{" "}
                {order.total_cost}
              </AdminIndexCustomerOrdersItem>
            );
          })
        );
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setOrders("Unable to fetch data");
        }
      });
  };

  return (
    <AdminIndexContainer>
      <AdminIndexHeaderWrapper>
        <AdminIndexHeading>Admin Account</AdminIndexHeading>
        <AdminIndexSearchbarWrapper onSubmit={(e) => fetchOrdersHandler(e)}>
          <AdminIndexSearchbar type="text" placeholder="Search Customers" />
          <SearchIcon type="submit">
            <Icon />
          </SearchIcon>
        </AdminIndexSearchbarWrapper>
        <AdminIndexEditServices onClick={toggleClick}>
          Edit Services & Cost
        </AdminIndexEditServices>
      </AdminIndexHeaderWrapper>
      {customerDetail}
      <AdminIndexCustomerOrdersWrapper>
        <AdminIndexCustomerOrdersHeading>
          Order Details
        </AdminIndexCustomerOrdersHeading>
        <AdminIndexCustomerOrdersList>{orders}</AdminIndexCustomerOrdersList>
      </AdminIndexCustomerOrdersWrapper>
      {form && <UpdateForm toggleForm={toggleForm} />}
    </AdminIndexContainer>
  );
};

export default AdminIndex;
