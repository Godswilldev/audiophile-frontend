import Footer from "components/footer";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { wrapper } from "redux/store/store";
import { Global } from "utils/globalStyles";
import { persistStore } from "redux-persist";
import ResponsiveAppBar from "components/navbar";
import { PageLoader } from "components/pageLoader";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, ...pageProps }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
        <Global />
        <ResponsiveAppBar />
        <Toaster containerStyle={{ fontSize: "1.5rem", fontWeight: 600 }} />
        <Component {...props.pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
