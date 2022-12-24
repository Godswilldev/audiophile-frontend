import React from "react";
import dynamic from "next/dynamic";
import { useTitle } from "react-use";
import { PageLoader } from "components/pageLoader";

const CategoryPageComponent = dynamic(() => import("components/categoryPage"), {
  loading: () => <PageLoader />,
});

const CategoryModule = () => {
  useTitle("Audiophile | Category");
  return <CategoryPageComponent />;
};

export default CategoryModule;
