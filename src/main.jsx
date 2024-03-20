import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <BrowserRouter basename="/rental-of-campers">
      <App />
    </BrowserRouter>
    {/* </PersistGate> */}
    {/* </Provider> */}
    <GlobalStyles />
  </React.StrictMode>
);