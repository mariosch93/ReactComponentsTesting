import React from "react";

interface Props {
  onClick: () => void;
  src: string;
  alt: string;
}

const Darkmode = ({ onClick, src, alt }: Props) => {
  return (
    <button className="darkMode fadeIn" onClick={onClick}>
      <img className="darkMode fadeIn" src={src} alt={alt} />
    </button>
  );
};

export default Darkmode;
