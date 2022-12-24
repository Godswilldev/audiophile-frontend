import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const ResendForgotPasswordComponent = dynamic(
  () => import("components/auth/resend-forgot-password-code"),
  {
    loading: () => <PageLoader />,
  }
);

const ResendForgotPasswordModule: NextPage = () => <ResendForgotPasswordComponent />;

export default ResendForgotPasswordModule;
