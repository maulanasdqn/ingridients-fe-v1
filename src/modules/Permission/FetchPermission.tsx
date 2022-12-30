import useFetchPermission from "@hooks/Permission/useFetchPermission";
import { FC, ReactElement } from "react";

const Permission: FC = (): ReactElement => {
  const permisionData = useFetchPermission();
  return (
    <div className="overflow-x-auto relative border-2 rounded-lg p-4 w-full my-6">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg">
        <thead className="text-xs  text-gray-700 bg-yellow-400 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Id
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Guard Name
            </th>
            <th scope="col" className="py-3 px-6">
              Created At
            </th>
            <th scope="col" className="py-3 px-6">
              Updated At
            </th>
          </tr>
        </thead>
        <tbody>
          {permisionData.results.map((item, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.name}
              </th>
              <td className="py-4 px-6">{item.guard_name}</td>
              <td className="py-4 px-6">{item.created_at}</td>
              <td className="py-4 px-6">{item.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Permission;
