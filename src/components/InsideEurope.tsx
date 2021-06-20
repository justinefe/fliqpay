import React from "react";

interface Props {}

export const InsideEurope: React.FC<Props> = () => {
  return (
    <>
      <div className="flex flex-col mt-3">
        <label className="mb-2">IBAN</label>
        <output className="outline-none rounded-md flex items-center text-fuschia-600 pl-4 border-fuschia-600 border-2 h-14">
          {" "}
          DE98370440018929829032
        </output>
      </div>
      <button className="text-white bg-btnPrimary rounded-md mt-8 h-14 w-full">
        Continue
      </button>{" "}
    </>
  );
};
