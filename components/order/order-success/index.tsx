import React from "react";
import { useRouter } from "next/router";
import { useGetOneOrderQuery } from "redux/api/order.api";

const OrderSuccess = () => {
  const router = useRouter();

  console.log(router?.query?.trxref);

  // "https://audiophi.vercel.app/user/order/order-success?trxref=rlmolwpd4n&reference=rlmolwpd4n";

  const {
    data: order,
    isLoading,
    isError,
  } = useGetOneOrderQuery(router.query.trxref as string, {
    skip: router.query.trxref === undefined,
  });

  console.log(order);

  return (
    <div>
      <h1>Order Success</h1>
    </div>
  );
};

export default OrderSuccess;
