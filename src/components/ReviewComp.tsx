import React from "react";

interface Props {
  className?: string;
  name: string;
  amount: string;
}

export const ReviewComponent: React.FC<Props> = ({
  className,
  name,
  amount,
}) => {
  return (
    <div className="flex justify-between mb-6">
      <h3>{name}</h3> <h3 className={className}>{amount}</h3>
    </div>
  );
};
