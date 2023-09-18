import { type AppType } from "next/dist/shared/lib/utils";
import { Provider } from "react-redux";
import store from "store";
import AuthComponent from "~/components/AuthComponent";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <AuthComponent>
        <Component {...pageProps} />
      </AuthComponent>
    </Provider>
  );
};

export default MyApp;
