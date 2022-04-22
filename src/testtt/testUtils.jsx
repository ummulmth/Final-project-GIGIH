import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as ReduxProvider } from "react-redux";

import playlistReducer from "../store/playlist";
import authReducer from "../store/auth";

const customRender = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { auth: authReducer, playlist: playlistReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Providers = ({ children }) => (
    <ReduxProvider store={store}>
      <ChakraProvider>{children}</ChakraProvider>
    </ReduxProvider>
  );

  return render(ui, { wrapper: Providers, ...renderOptions });
};

export * from "@testing-library/react";
export { customRender as render };