import store from "redux/store/store";
import Footer from "components/footer";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Global } from "utils/globalStyles";
import { persistStore } from "redux-persist";
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
        <Toaster containerStyle={{ fontSize: "1.5rem", fontWeight: 600 }} />
        <Component {...pageProps} />
        <Footer />
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
