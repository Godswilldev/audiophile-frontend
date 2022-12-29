import React from "react";
import dynamic from "next/dynamic";
import { useTitle } from "react-use";
import { useRouter } from "next/router";
import NotFound from "components/404/notFound";
import { PageLoader } from "components/pageLoader";
import { useGetOneProductQuery } from "redux/api/products.api";

const ProductDetailComponent = dynamic(() => import("components/productDetails"), {
  loading: () => <PageLoader />,
  suspense: true,
  ssr: true,
});

const ProductDetailpage = () => {
  useTitle("Audiophile | Product Details");
  const router = useRouter();

  const { data, isLoading, isError, isFetching } = useGetOneProductQuery(
    router.query?.productDetails as string
  );

  if (isLoading || isFetching) {
    return <PageLoader />;
  } else {
    return data !== undefined && data.data._id && !isError ? (
      <ProductDetailComponent {...data.data} />
    ) : (
      <NotFound />
    );
  }
};

export default ProductDetailpage;
