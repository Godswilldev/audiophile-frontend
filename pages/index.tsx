import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { PageLoader } from "components/pageLoader";

const HomeComponent = dynamic(() => import("components/homePage"), {
  loading: () => <PageLoader />,
});

const HomeModule: NextPage = () => <HomeComponent />;

export default HomeModule;
