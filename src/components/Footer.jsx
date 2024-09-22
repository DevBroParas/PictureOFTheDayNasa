import React from "react";

export const Footer = (props) => {
  const { handelToggleModel, data } = props;
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>POTD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handelToggleModel}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};
