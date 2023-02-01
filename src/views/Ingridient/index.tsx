import Auth from "@modules/Auth/Middleware/Auth";
import MainLayout from "@layouts/Main";
import SubLoading from "@components/Loading/SubLoading";
import { FC, ReactElement, Suspense } from "react";
import { setTitle } from "@util/helper";
import IngridientModule from "@modules/Ingridient/FetchIngridient";

const Ingridient: FC = (): ReactElement => {
  setTitle("Permission");

  return (
    <Auth>
      <MainLayout>
        <h1 className="text-3xl">Daftar Komposisi</h1>
        <Suspense fallback={<SubLoading />}>
          <IngridientModule />
        </Suspense>
      </MainLayout>
    </Auth>
  );
};

export default Ingridient;
