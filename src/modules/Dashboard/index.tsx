import useFetchIngridient from "@hooks/Ingridient/useFetchIngridient";
import { FC, ReactElement } from "react";

const DashboardModules: FC = (): ReactElement => {
  const ingridientData = useFetchIngridient();

  return (
    <section className="flex gap-x-6 mt-6">
      <a
        href="#"
        className="block max-w-sm w-[600px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total Komposisi
        </h5>
        <p className=" text-gray-700 text-3xl font-bold dark:text-gray-400">
          {ingridientData.items.length}
        </p>
      </a>
      <a
        href="#"
        className="block max-w-sm w-[600px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total Kategori
        </h5>
        <p className=" text-gray-700 text-3xl font-bold dark:text-gray-400">0</p>
      </a>
      <a
        href="#"
        className="block max-w-sm w-[600px] p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total Produk
        </h5>
        <p className=" text-gray-700 text-3xl font-bold dark:text-gray-400">0</p>
      </a>
    </section>
  );
};

export default DashboardModules;
