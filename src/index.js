import packageJSON from "../package.json";
import React from "react";
import ReactDOM from "react-dom";
import ViewRouter from "./ViewRouter";
import muiTheme from "./theme/mui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { configureStore } from "./store/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const store = configureStore();
const getStore = () => {
  return store;
};
export { getStore };
const persistor = persistStore(store);

const theme = createMuiTheme(muiTheme);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MuiThemeProvider theme={theme}>
        <ViewRouter />
      </MuiThemeProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("react")
);

serviceWorker.register();
