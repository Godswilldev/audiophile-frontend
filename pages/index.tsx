import dynamic from "next/dynamic";
import type { NextPage } from "next";
import { wrapper } from "redux/store/store";
import { PageLoader } from "components/pageLoader";
import { getAllProducts, getRunningOperationPromises } from "redux/api/products.api";
import { verifyUserJwt } from "redux/api/auth.api";
import { setAuthUser } from "redux/reducers/auth.reducer";

const HomeComponent = dynamic(() => import("components/homePage"), {
  loading: () => <PageLoader />,
});

const HomeModule: NextPage = (products) => <HomeComponent {...products} />;

export default HomeModule;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const { data: products } = await store.dispatch(getAllProducts.initiate());
  const { data: authUser } = await store.dispatch(verifyUserJwt.initiate());
  store.dispatch(setAuthUser({ user: authUser, jwt: null }));
  await Promise.all(getRunningOperationPromises());

  return {
    props: { ...products },
  };
});
