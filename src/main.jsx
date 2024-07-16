import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Styles/Main.scss";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Context/Auth_Provider/AuthProvider.jsx";
import ListProvider from "./Context/List_Provider/ListProvider.jsx";
import BlockerProvider from "./Context/Blocker_Provider/BlockerProvider.jsx";
import ProfileProvider from "./Context/Profile_Provider/ProfileProvider.jsx";
import LoadingProvider from "./Context/Loading_Provider/LoadingProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProfileProvider>
          <BlockerProvider>
            <ListProvider>
              <LoadingProvider>
                <App />
              </LoadingProvider>
            </ListProvider>
          </BlockerProvider>
        </ProfileProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
