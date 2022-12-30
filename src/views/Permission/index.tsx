import Auth from "@modules/Auth/Middleware/Auth";
import Permission from "@modules/Permission/FetchPermission";
import MainLayout from "@layouts/Main";
import SubLoading from "@components/Loading/SubLoading";
import { FC, ReactElement, Suspense } from "react";
import { setTitle } from "@util/helper";

const Dashboard: FC = (): ReactElement => {
  setTitle("Permission");

  return (
    <Auth>
      <MainLayout>
        <Suspense fallback={<SubLoading />}>
          <Permission />
        </Suspense>
      </MainLayout>
    </Auth>
  );
};

export default Dashboard;
