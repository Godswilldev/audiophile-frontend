import React from "react";
import { useRouter } from "next/router";
import { useGetOneOrderQuery } from "redux/api/order.api";

const OrderSuccess = () => {
  const router = useRouter();
  console.log(router?.query?.txRef);

  const {
    data: order,
    isLoading,
    isError,
  } = useGetOneOrderQuery(router.query.txRef as string, {
    skip: router.query.txRef === undefined,
  });

  console.log(order);

  return (
    <div>
      <h1>Order Success</h1>
    </div>
  );
};

export default OrderSuccess;
