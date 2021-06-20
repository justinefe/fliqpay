import React from "react";

interface Props {}

export const OutsideEurope: React.FC<Props> = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col mt-3">
        <label className="mb-2">SWIFT / BIC code</label>
        <output className="outline-none rounded-md flex items-center text-fuschia-600 pl-4 border-fuschia-600 border-2 h-14">
          {" "}
          BUKBGB22
        </output>
      </div>
      <div className="flex flex-col mt-3">
        <label className="mb-2">IBAN / Account Number</label>
        <output className="outline-none rounded-md flex items-center text-fuschia-600 pl-4 border-fuschia-600 border-2 h-14">
          {" "}
          01234567891
        </output>
      </div>
      <button className="text-white bg-btnPrimary rounded-md mt-8 h-14 w-full">
        Continue
      </button>
    </>
  );
};
