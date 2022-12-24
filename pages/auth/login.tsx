import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const LoginComponent = dynamic(() => import("components/auth/login"), {
  loading: () => <PageLoader />,
});

const LoginModule: NextPage = () => <LoginComponent />;

export default LoginModule;
