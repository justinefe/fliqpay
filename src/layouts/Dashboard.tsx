import React from "react";
import { Navlink } from "../components/Navlink";
import { Close } from "../assets/Close";
import Logo from "../assets/logo.png";

interface Props {
  children: JSX.Element | null;
  handleCancel: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export const Dashboard: React.FC<Props> = ({ children, handleCancel }) => {
  return (
    <div className="dark:bg-black h-screen  ">
      <div className="bg-white">
        <div className="container mx-auto px-4  flex items-center justify-between">
          <img src={Logo} alt="" className="" />
          <div className="flex flex-col w-full max-w-lg relative ">
            <div className="flex justify-between border-t my-5 pb-2 md:my-8 md:pb-4 ">
              <Navlink title="Amount" link="" />
              <Navlink title="Recipient" link="recipient" />
              <Navlink title="Review" link="review" />
              <Navlink title="Pay" link="pay" />
            </div>
          </div>
          <div
            onClick={handleCancel}
            className="p-4 right-3 lg:top-4 lg:-right-3"
          >
            <Close className="cancel cancel-hover h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8" />
          </div>
        </div>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};
