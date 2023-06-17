import React from "react";
import { useSelector } from "react-redux";

export const DisplayData = () => {
  const { counter } = useSelector((state) => state.counterData);

  return <div> {counter}</div>;
};
