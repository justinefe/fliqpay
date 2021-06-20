import React, { useState } from "react";
import { Title } from "../components/Title";
import { DashboardWrap } from "../components/DashboardWrap";

interface Props {}

export const Recipient: React.FC<Props> = () => {
  const [europe, setEurope] = useState<boolean>(true);
  return (
    <DashboardWrap>
      <>
        <Title
          title="Your Recipient"
          description="Who are you sending money to"
        />{" "}
        <div className="flex flex-col mt-3">
          <label className="mb-2">Their email (optional)</label>
          <input
            className=" outline-none rounded-md text-primary pl-4 border-fuschia-600 border-2 h-14"
            type="email"
          />
        </div>
        <div className="flex flex-col mt-3">
          <label className="mb-2">Full name of the account holder</label>
          <input
            className="outline-none rounded-md text-primary pl-4 border-fuschia-600 border-2 h-14"
            type="type"
          />
        </div>
        <div className="border-fuchsia-600 border-b-2 pb-2 mt-6 mb-6">
          <h3 className="font-semibold text-lg text-primary pb-1">
            Bank details
          </h3>
        </div>
        <div className="border-fuchsia-600 border-b-2 b-2 mt-6 mb-6">
          <div className="flex -mb-1">
            <div
              onClick={(event) => {
                setEurope(true);
              }}
              className="flex flex-col items-center"
            >
              {" "}
              <div className="cursor-pointer  mb-2">
                <span
                  className={` transition ${
                    europe ? "text-btnPrimary hover:text-primary" : "text-txt"
                  } duration-300 ease-in-out `}
                >
                  Inside Europe
                </span>
              </div>
              <div
                className={`cursor-pointer  w-32 ${
                  europe ? "border-btnPrimary border-b-4" : ""
                }`}
              ></div>
            </div>
            <div
              onClick={(event) => {
                setEurope(false);
              }}
              className="ml-14 flex flex-col items-center"
            >
              {" "}
              <div className="cursor-pointer  mb-2">
                {" "}
                <span
                  className={` transition ${
                    !europe ? "text-btnPrimary hover:text-primary" : "text-txt"
                  } duration-300 ease-in-out `}
                >
                  Outside Europe
                </span>
              </div>
              <div
                className={`cursor-pointer  w-32 ${
                  !europe ? "border-btnPrimary border-b-4" : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
        {europe ? (
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
            </button>
          </>
        ) : (
          <>
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
        )}
      </>
    </DashboardWrap>
  );
};
