import React from "react";
import dynamic from "next/dynamic";
import { useTitle } from "react-use";
import { useRouter } from "next/router";
import { wrapper } from "redux/store/store";
import { PageLoader } from "components/pageLoader";
import { ProductProps } from "interfaces/products";
import { getOneProduct, getRunningOperationPromises } from "redux/api/products.api";

const ProductDetailComponent = dynamic(() => import("components/productDetails"), {
  loading: () => <PageLoader />,
});

const ProductDetailpage = (product: any) => {
  useTitle("Audiophile | Product Details");

  return <ProductDetailComponent {...product} />;
};

export default ProductDetailpage;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const product_id = context.params?.productDetails;
  let product: ProductProps | any;

  if (typeof product_id === "string") {
    product = await store.dispatch(getOneProduct.initiate(product_id));
  }

  await Promise.all(getRunningOperationPromises());

  return {
    props: { ...product.data },
  };
});
