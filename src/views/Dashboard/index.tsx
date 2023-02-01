import { setTitle } from "@util/helper/index";
import { ReactElement, FC, Suspense } from "react";

import Auth from "@modules/Auth/Middleware/Auth";
import MainLayout from "@layouts/Main";
import DashboardModules from "@modules/Dashboard";
import SubLoading from "@components/Loading/SubLoading";

const Dashboard: FC = (): ReactElement => {
  setTitle("Dashboard");

  return (
    <Auth>
      <MainLayout>
        <h1 className="text-3xl">Dashboard</h1>
        <Suspense fallback={<SubLoading />}>
          <DashboardModules />
        </Suspense>
      </MainLayout>
    </Auth>
  );
};

export default Dashboard;
