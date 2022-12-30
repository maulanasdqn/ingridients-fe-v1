import { setTitle } from "@util/helper/index";
import { ReactElement, FC } from "react";

import Auth from "@modules/Auth/Middleware/Auth";
import MainLayout from "@layouts/Main";

const Dashboard: FC = (): ReactElement => {
  setTitle("Dashboard");

  return (
    <Auth>
      <MainLayout>
        <h1 className="text-3xl">Anjay Senggol Dong</h1>
      </MainLayout>
    </Auth>
  );
};

export default Dashboard;
