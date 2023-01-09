import React from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useGetOneOrderQuery } from "redux/api/order.api";

const OrderSuccess = () => {
  const router = useRouter();

  const {
    data: order,
    isLoading,
    isError,
  } = useGetOneOrderQuery(router.query.trxref as string, {
    skip: router.query.trxref === undefined,
  });

  console.log(order);

  return (
    <Box>
      <h1>Order Success</h1>
      <h3>Grand Total: {order?.grandTotal}</h3>
      <h3>Order Status: {order?.orderStatus}</h3>
      <h3>Order ID: {order?._id}</h3>

      <h1>Shipping Info</h1>
      <h3>Address: {order?.shippingInfo.address}</h3>
      <h3>Firstname: {order?.shippingInfo.city}</h3>
      <h3>Lastname: {order?.shippingInfo.country}</h3>

      <h1>User</h1>
      <h3>Email: {order?.user.email}</h3>
      <h3>Firstname: {order?.user.firstname}</h3>
      <h3>Lastname: {order?.user.lastname}</h3>

      <h1>Order Items</h1>
      {order?.orderItems.map((ord: any) => (
        <Box key={ord?.product.id}>
          <h3>Product ID: {ord?.product.id}</h3>
          <h3>Name: {ord?.product.name}</h3>
          <h3>Price: {ord?.product.price}</h3>
          <h3>Quantity: {ord?.quantity}</h3>
        </Box>
      ))}
    </Box>
  );
};

export default OrderSuccess;
