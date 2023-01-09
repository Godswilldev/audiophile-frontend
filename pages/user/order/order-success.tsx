import dynamic from "next/dynamic";
import type { NextPage } from "next";
import withAuth from "components/auth/authHoc";
import { PageLoader } from "components/pageLoader";

const OrderSuccess = dynamic(() => import("components/order/order-success"), {
  loading: () => <PageLoader />,
});

const OrderSuccessModule: NextPage = () => <OrderSuccess />;

export default withAuth(OrderSuccessModule);
