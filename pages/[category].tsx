import React from "react";
import dynamic from "next/dynamic";
import { useTitle } from "react-use";
import { wrapper } from "redux/store/store";
import { PageLoader } from "components/pageLoader";
import { getAllProducts, getRunningOperationPromises } from "redux/api/products.api";

const CategoryPageComponent = dynamic(() => import("components/categoryPage"), {
  loading: () => <PageLoader />,
});

const CategoryModule = (products: any) => {
  useTitle("Audiophile | Category");
  return <CategoryPageComponent {...products} />;
};

export default CategoryModule;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { data: products } = await store.dispatch(getAllProducts.initiate());

  await Promise.all(getRunningOperationPromises());

  return {
    props: { ...products },
  };
});
