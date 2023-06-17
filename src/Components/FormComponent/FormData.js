import React, { useState } from "react";

export const FormData = () => {
  const [form, setForm] = useState("");
  const handlOnChange = (e) => {
    const { value } = e.target;
    setForm(value);
  };
  return (
    <div>
      <form>
        <input type="text" />
        <button> Add</button>
      </form>
    </div>
  );
};
