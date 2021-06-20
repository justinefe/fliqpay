import React, { useState } from "react";
import { Title } from "../components/Title";
import { DashboardWrap } from "../components/DashboardWrap";
import { AmountDesc } from "../components/AmountDesc";
import dropDown from "../assets/caret.png";
import Usa from "../assets/USA.png";

interface Props {}

export const Amount: React.FC<Props> = () => {
  const [curr, setCurr] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setCurr((prev) => !prev);
  };
  return (
    <DashboardWrap>
      <>
        <Title
          title="One-time Payout"
          description="Send money internationlly"
        />{" "}
        <div className="flex  w-full h-16 rounded-md mt-6 ">
          <div className="py-2 px-6 flex-grow border-t border-b border-l rounded-l-md flex flex-col">
            <h3>You send</h3>
            <input
              type="number"
              className="outline-none text-primary appearance-none flex-grow"
            />
          </div>
          <div className="flex flex-col relative">
            <div
              onClick={handleClick}
              className="flex items-center rounded-r-md bg-currencyBg h-full w-36 justify-between px-6"
            >
              <img src={Usa} alt="" className="pointer-events-none" />
              <h3 className="pointer-events-none text-primary ">USD</h3>
              <img src={dropDown} alt="" className="pointer-events-none" />
            </div>
            {curr ? (
              <div className="absolute top-16">
                <div className="flex justify-between px-6 w-36 py-2 bg-white">
                  {" "}
                  <img src={Usa} alt="" />
                  <h3 className="text-primary">USD</h3>
                </div>{" "}
                <div className="flex justify-between px-6 w-36 py-2 bg-white">
                  {" "}
                  <img src={Usa} alt="" />
                  <h3 className="text-primary">USD</h3>
                </div>{" "}
                <div className="flex justify-between px-6 w-36 py-2 bg-white">
                  {" "}
                  <img src={Usa} alt="" />
                  <h3 className="text-primary">USD</h3>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="-mb-3 border-l-2 ml-4 py-4 border-currencyBg">
          <AmountDesc symbol="−" amount="3.69 USD" desc="Transfer fee" />
          <AmountDesc
            symbol="="
            amount="996.31 EUR"
            desc="Amount we'll convert"
          />
          <AmountDesc
            symbol=" x"
            amount="1.14989"
            desc="Guaranteed rate (1hr)"
            className="text-primary"
          />
        </div>
        <div className="flex  w-full h-16 rounded-md mt-3 ">
          <div className="py-2 px-6 flex-grow border-t border-b border-l rounded-l-md flex flex-col">
            <h3>Recipient gets</h3>
            <output className="outline-none text-primary appearance-none flex-grow">
              hie{" "}
            </output>
          </div>
          <div className="flex items-center rounded-r-md bg-currencyBg h-full w-36 justify-between px-6">
            <img src={Usa} alt="" />
            <h3 className="text-primary">USD</h3>
            <img src={dropDown} alt="" />
          </div>
        </div>
        <div className="flex  w-full h-14 rounded-md mt-8 ">
          <button className="border border-btnPrimary text-btnPrimary rounded-md w-full">
            Compare Rates
          </button>
          <button className="text-white bg-purple-400 rounded-md ml-6 w-full">
            Continue
          </button>
        </div>
      </>
    </DashboardWrap>
  );
};
