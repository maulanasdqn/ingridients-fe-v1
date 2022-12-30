import { ReactElement, FC, useState, Fragment, ReactNode, MouseEventHandler } from "react";
import { TbArrowAutofitLeft, TbArrowAutofitRight } from "react-icons/tb";
import SidebarItem from "./SidebarItem";

type SidebarTypes = {
  items: Array<{
    icons: ReactNode;
    text: string;
    link?: string;
    onClick?: MouseEventHandler<HTMLElement> | VoidFunction;
  }>;
};

const Sidebar: FC<SidebarTypes> = ({ items }): ReactElement => {
  const [collapse, setCollapse] = useState(false);
  const [collapseMode, setCollapseMode] = useState(false);

  return (
    <aside
      onMouseEnter={() => {
        if (collapseMode) {
          setCollapse(false);
        }
      }}
      onMouseLeave={() => {
        if (collapseMode) {
          setCollapse(true);
        }
      }}
      className={`flex flex-col items-start transition-all linear gap-y-4 p-3 bg-white shadow-lg rounded-lg h-screen ${
        collapse ? "w-[5%]" : " w-[15%]"
      }`}
    >
      <section className="flex p-3 justify-between w-full items-center">
        <span>Logo Anjay</span>
        {!collapse && (
          <span onClick={() => setCollapseMode(!collapseMode)}>
            {collapseMode ? (
              <TbArrowAutofitRight className={"text-1xl"} />
            ) : (
              <TbArrowAutofitLeft className={"text-1xl"} />
            )}
          </span>
        )}
      </section>
      {items.map((item, index) => (
        <SidebarItem key={index} isCollapsible={collapse} {...item} />
      ))}
    </aside>
  );
};

export default Sidebar;
