import ReactDOM from "react-dom";
import App from './App';
import "./index.css";
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./utils_theme";
import store from "./store";
import { Provider as ReduxProvider } from 'react-redux';

ReactDOM.render(
  <ReduxProvider store={store}>
    <ChakraProvider resetCSS theme={theme}>
      <App />
    </ChakraProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
