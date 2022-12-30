import Sidebar from "@components/Sidebar";
import AuthService from "@service/Auth";
import { FC, ReactElement, ReactNode } from "react";
import { TbActivity } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { SiAdguard } from "react-icons/si";

type MainLayoutTypes = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutTypes> = ({ children }): ReactElement => {
  const sidebarItems = [
    {
      icons: <TbActivity />,
      text: "Dashboard",
      link: "/dashboard",
    },

    {
      icons: <SiAdguard />,
      text: "Permission",
      link: "/permission",
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
