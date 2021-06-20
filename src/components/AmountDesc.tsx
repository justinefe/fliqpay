import React from "react";

interface Props {
  symbol: string;
  amount: string;
  desc: string;
  className?: string;
}

export const AmountDesc: React.FC<Props> = ({
  symbol,
  amount,
  desc,
  className,
}) => {
  return (
    <div className={`flex py-2.5  items-center ${className}`}>
      <div className="-ml-3.5 mr-6 h-7 w-7  text-txt flex justify-center rounded-full bg-currencyBg">
        <h3>{symbol}</h3>
      </div>

      <h3 className="w-24">{amount}</h3>
      <h3>{desc}</h3>
    </div>
  );
};
