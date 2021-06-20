import React from "react";

interface Props {
  message: string;
}

export const Pay: React.FC<Props> = ({ message }) => {
  return <div>{message} </div>;
};
