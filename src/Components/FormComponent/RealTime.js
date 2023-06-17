import React from "react";
import { useSelector } from "react-redux";

export const RealTime = () => {
  const { value } = useSelector((state) => state.counterData);

  return;

  <div>{value}</div>;
};
