import React, { ReactNode } from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

const DropMenu = ({ children, label }: Props) => {
  return (
    <select aria-label={label}>
      <title>dwd</title>
      <option value="Greece">Greece</option>
    </select>
  );
};

export default DropMenu;
