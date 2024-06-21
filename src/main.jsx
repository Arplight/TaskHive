import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/Main.scss";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/Auth_Provider/AuthProvider.jsx";
import ListProvider from "./Context/List_Provider/ListProvider.jsx";
import BlockerProvider from "./Context/Blocker_Provider/BlockerProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/TaskHive">
      <AuthProvider>
        <BlockerProvider>
          <ListProvider>
            <App />
          </ListProvider>
        </BlockerProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
