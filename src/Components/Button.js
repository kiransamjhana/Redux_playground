import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../counterSlice";

export const Button = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </p>
    </div>
  );
};
