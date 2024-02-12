import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create a separate root for ToastContainer
const toastRoot = ReactDOM.createRoot(document.getElementById("toast-root"));
toastRoot.render(<ToastContainer />);

// Create the main root for your app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
