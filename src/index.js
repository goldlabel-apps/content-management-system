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
import firebase from "firebase/app";

console.log(
  `${packageJSON.name} ${packageJSON.version} (${process.env.REACT_APP_ENV})`
);

const store = configureStore();
const getStore = () => {
  return store;
};
export { getStore };

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
});

firebaseApp.auth().onAuthStateChanged(user => {
  console.log (`AUTH CHANGE`, user);
  //getStore().dispatch({ type: `FIREBASE_ON_AUTH_STATE_CHANGE`, user });
});


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
