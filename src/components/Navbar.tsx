import React from "react";
import { Close } from "../assets/Close";
import logo from "../assets/logo.png";

interface Props {
  text: "Message";
}

export const Navbar: React.FC<Props> = () => {
  return (
    <div className="2x-container mx-auto shadow flex  ">
      {/*<img src={logo} alt="Logo of something" />
      <Close /> */}
    </div>
  );
};

// export default Navbar;
