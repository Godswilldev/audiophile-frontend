import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const ResendEmailTokenComponent = dynamic(() => import("components/auth/resend-token"), {
  loading: () => <PageLoader />,
});

const ResendEmailTokenModule: NextPage = () => <ResendEmailTokenComponent />;

export default ResendEmailTokenModule;
