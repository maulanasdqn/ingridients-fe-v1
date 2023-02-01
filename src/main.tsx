import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "@views/App";
// eslint-disable-next-line import/no-unresolved
import "uno.css";
import "@unocss/reset/tailwind.css";
import ApiService from "@service/Api";
import { RecoilRoot } from "recoil";
import TokenService from "@service/Token";
import SubLoading from "@components/Loading/SubLoading";

ApiService.init(import.meta.env.VITE_API_URL);

if (TokenService.getToken()) {
  ApiService.setHeader();
  ApiService.mount401Interceptor();
} else {
  ApiService.removeHeader();
  ApiService.unmount401Interceptor();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={<SubLoading />}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>,
);
