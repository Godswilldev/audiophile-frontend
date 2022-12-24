import store from "redux/store/store";
import { Provider } from "react-redux";
import Footer from "components/footer";
import type { AppProps } from "next/app";
import { Global } from "utils/globalStyles";
import { Toaster } from "react-hot-toast";
import { persistStore } from "redux-persist";
import * as _ from "styled-components/cssprop";
import ResponsiveAppBar from "components/navbar";
import { PageLoader } from "components/pageLoader";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<PageLoader />} persistor={persistor}>
        <Global />
        <ResponsiveAppBar />
        <Toaster containerStyle={{ fontSize: "1.5rem", fontWeight:600 }} />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
