import { FC, MouseEventHandler, ReactElement, ReactNode } from "react";
import { NavLink } from "react-router-dom";

type DropdownTypes = {
  isCollapsible: boolean;
  text: string;
  icons: ReactNode;
  link?: string;
  onClick?: MouseEventHandler<HTMLElement> | undefined | VoidFunction;
};

const SidebarItem: FC<DropdownTypes> = ({
  isCollapsible,
  icons,
  text,
  link,
  onClick,
}): ReactElement => {
  return (
    <NavLink
      onClick={onClick}
      to={`${link === undefined ? window.location.pathname : link}`}
      className={({ isActive }) =>
        isActive && link !== undefined
          ? "bg-active text-primary flex cursor-pointer transition-all linear items-center hover:bg-gray-100 w-full gap-x-4 justify-start p-2 rounded-lg"
          : "flex cursor-pointer transition-all linear items-center hover:bg-gray-100 w-full gap-x-4 justify-start p-2 rounded-lg"
      }
    >
      <span
        className={`${
          isCollapsible
            ? "text-[30px] w-full text-center flex items-center justify-center"
            : "text-[20px] order-0"
        }`}
      >
        {icons}
      </span>
      {!isCollapsible && text}
    </NavLink>
  );
};

export default SidebarItem;
