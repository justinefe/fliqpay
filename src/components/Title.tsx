import React from "react";

interface Props {
  title: string;
  description?: string;
}

export const Title: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="border-fuchsia-600 border-b-2 pb-2 mb-6">
      <h3 className="font-semibold text-lg text-primary pb-1">{title}</h3>
      <h3
        className="
      text-btnSec text-sm "
      >
        {description}
      </h3>
    </div>
  );
};
