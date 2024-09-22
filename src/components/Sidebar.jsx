import React from "react";

export default function Sidebar(props) {
  const { handelToggleModel, data } = props;
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sideBarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handelToggleModel}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
