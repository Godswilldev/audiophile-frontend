import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const ForgotPasswordComponent = dynamic(() => import("components/auth/forgot-password"), {
  loading: () => <PageLoader />,
});

const ForgotPasswordModule: NextPage = () => <ForgotPasswordComponent />;

export default ForgotPasswordModule;
