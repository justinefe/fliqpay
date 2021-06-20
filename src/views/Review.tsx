import React from "react";
import { DashboardWrap } from "../components/DashboardWrap";
import { Title } from "../components/Title";
import { ReviewComponent } from "../components/ReviewComp";

interface Props {}

export const Review: React.FC<Props> = () => {
  return (
    <DashboardWrap>
      <>
        <Title title="Review details of your transfer" description="" />{" "}
        <ReviewComponent
          className="font-semibold text-black"
          name="You send"
          amount="1,000 USD"
        />
        <ReviewComponent name="Total fees (included)" amount="3.69 USD" />
        <ReviewComponent name="Amount we'll convert" amount="996.31 USD" />
        <ReviewComponent name="Guaranteed rate" amount="1.10289" />
        <ReviewComponent
          className="font-semibold text-black"
          name="Johnny gets"
          amount="1,248.63 EUR"
        />
        <div className="border-fuchsia-600 border-b-2 pb-2 mb-6"></div>
        <ReviewComponent name="Name" amount="Johnny Gbadamosi" />
        <ReviewComponent
          name="Email address"
          amount="Johnny.gbadamosi@gmail.com"
        />
        <ReviewComponent
          name="IBAN / Account number"
          amount="DE898919013902102"
        />
        <button className="text-white bg-btnTex rounded-md mt-4 mb-2 h-14 w-full">
          Confirm and Continue
        </button>
      </>
    </DashboardWrap>
  );
};
