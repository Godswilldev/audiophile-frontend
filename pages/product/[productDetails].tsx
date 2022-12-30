import React from "react";
import dynamic from "next/dynamic";
import { useTitle } from "react-use";
import { PageLoader } from "components/pageLoader";

const ProductDetailComponent = dynamic(() => import("components/productDetails"), {
  loading: () => <PageLoader />,
});

const ProductDetailpage = () => {
  useTitle("Audiophile | Product Details");

  return <ProductDetailComponent />;
};

export default ProductDetailpage;
