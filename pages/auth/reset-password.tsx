import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const ResetPasswordComponent = dynamic(() => import("components/auth/reset-password"), {
  loading: () => <PageLoader />,
});

const ResetPasswordModule: NextPage = () => <ResetPasswordComponent />;

export default ResetPasswordModule;
