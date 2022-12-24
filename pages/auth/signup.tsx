import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const SignupComponent = dynamic(() => import("components/auth/signup"), {
  loading: () => <PageLoader />,
});

const SignupModule: NextPage = () => <SignupComponent />;

export default SignupModule;
