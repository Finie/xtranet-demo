import React, { useContext, useState, useEffect, useRef } from "react";
import { AppState } from "react-native";

import { ModalPortal } from "react-native-modals";
import MainNavigation from "./app/MainNavigation";
import AppContextProvider from "./app/provider/AppContextProvider";
import AuthNavigation from "./app/AuthNavigation";
import InitializeContextProvider from "./app/provider/InitializeContextProvider";
import AuthStore from "./app/cache/AuthStore";

export default function App() {
  const { userInfo, setuserInfo } = useContext(InitializeContextProvider);
  const [userData, setuserData] = useState(userInfo);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (appState.current !== "active") {
      setTimeout(() => {
        AuthStore.saveXtranettUser(null);
        setuserData(null);
        setuserInfo(null);
      }, 30000);
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      return;
    }
  };

  return (
    <AppContextProvider.Provider value={{ userData, setuserData }}>
      {!userData ? <AuthNavigation /> : <MainNavigation />}
      <ModalPortal />
    </AppContextProvider.Provider>
  );
}
