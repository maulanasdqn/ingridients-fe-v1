import Sidebar from "@components/Sidebar";
import AuthService from "@service/Auth";

import { TbActivity, Tb3DCubeSphere } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";
import { CommonInterface } from "@util/interfaces/Common";
import { FC, ReactElement } from "react";

const MainLayout: FC<CommonInterface> = ({ children }): ReactElement => {
  const sidebarItems = [
    {
      icons: <TbActivity />,
      text: "Dashboard",
      link: "/dashboard",
    },

    {
      icons: <Tb3DCubeSphere />,
      text: "Komposisi",
      link: "/ingridients",
    },

    {
      icons: <BiLogOut />,
      text: "Logout",
      onClick: () => AuthService.Logout(),
    },
  ];

  return (
    <section className="flex w-full gap-x-4">
      <Sidebar items={sidebarItems} />
      <section className="p-4 w-full">{children}</section>
    </section>
  );
};

export default MainLayout;
