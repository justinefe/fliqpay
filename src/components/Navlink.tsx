import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  link: string;
  title: string;
}

export const Navlink: React.FC<Props> = ({ link, title }) => {
  return (
    <div className="">
      <NavLink exact activeClassName='b' to={`/${link}`}>
        <div className="flex flex-col items-center justify-center">
          <div
            className="bb h-1 rounded-md"
          ></div>{" "}
          <div className="cursor-pointer">
            <span
              className="text-xs md:text-sm transition duration-300 ease-in-out hover:text-black dark:text-white lg:text-lg text-txt
              "
            >
              {title}
            </span>
          </div>
        </div>
      </NavLink>
    </div>
  );
};
