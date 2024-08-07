import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { TabValueProvider } from "./context/tabValue";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
        limit={3}
        position="top-right"
        autoClose={2000}
        pauseOnFocusLoss={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        icon={false}
      />
      <TabValueProvider>
        <App />
      </TabValueProvider>
    </BrowserRouter>
  </React.StrictMode>
);
