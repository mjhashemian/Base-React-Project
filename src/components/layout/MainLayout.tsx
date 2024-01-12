import { Outlet } from "react-router-dom";

import { QueryClientProvider } from "react-query";
import { ConfigProvider } from "antd";
import { UseScrollTop } from "../../helper/hooks/useScrollTop";
import { queryClient } from "../../services/config";
// import "@assets/styles/_variable.scss";
// import "@assets/styles/_config.scss";

function MainLayout() {
  return (
    <main className="w-full">
      <ConfigProvider direction="rtl">
        <QueryClientProvider client={queryClient}>
          {/* <Suspense fallback={<h1>loading....</h1>}> */}
          <UseScrollTop />
          <Outlet />
          {/* </Suspense> */}
        </QueryClientProvider>
      </ConfigProvider>
    </main>
  );
}

export default MainLayout;
