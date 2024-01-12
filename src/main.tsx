import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/index.css";
import App from "./App.tsx";
import { RecoilRoot } from "recoil";
import dayjs from "dayjs";
import { AuthProvider } from "./helper/context/AuthContext.tsx";

dayjs.locale("fa");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
