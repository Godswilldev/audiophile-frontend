import dynamic from "next/dynamic";
import { useTitle } from "react-use";
import type { NextPage } from "next";
import withAuth from "components/auth/authHoc";
import { PageLoader } from "components/pageLoader";

const CheckoutComponent = dynamic(() => import("components/checkout"), {
  loading: () => <PageLoader />,
});

const CheckoutModule: NextPage = () => {
  useTitle("CHECKOUT | AUDIOPHILE")
  return <CheckoutComponent />;
};

export default withAuth(CheckoutModule);
