import Footer from "components/footer";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Global } from "utils/globalStyles";
import { wrapper } from "redux/store/store";
import ResponsiveAppBar from "components/navbar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global />
      <ResponsiveAppBar />
      <Toaster containerStyle={{ fontSize: "1.5rem", fontWeight: 600 }} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default wrapper.withRedux(MyApp);
