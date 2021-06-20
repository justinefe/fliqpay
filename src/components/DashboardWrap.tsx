import React from "react";

interface Props {
  children: JSX.Element | null;
}

export const DashboardWrap: React.FC<Props> = ({ children }) => {
  return (
    <div>
      {" "}
      <div className="mt-10 bg-white shadow mx-auto rounded-md max-w-lg px-6 py-10 text-txt">
        {children}{" "}
      </div>
    </div>
  );
};
