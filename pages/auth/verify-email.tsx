import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const VerifyEmailComponent = dynamic(() => import("components/auth/verify-email"), {
  loading: () => <PageLoader />,
});

const VerifyEmailModule: NextPage = () => <VerifyEmailComponent />;

export default VerifyEmailModule;
