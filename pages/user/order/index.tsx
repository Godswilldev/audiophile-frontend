import dynamic from "next/dynamic";
import type { NextPage } from "next";
import withAuth from "components/auth/authHoc";
import { PageLoader } from "components/pageLoader";

const AllOrders = dynamic(() => import("components/order/all-orders"), {
  loading: () => <PageLoader />,
});

const AllOrdersModule: NextPage = () => <AllOrders />;

export default withAuth(AllOrdersModule);
