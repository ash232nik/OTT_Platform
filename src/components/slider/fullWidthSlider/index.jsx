import React from "react";
import "./index.scss";
const FullWidthSlider = (props) => {
  const { children, id = "slider", title = "", subTitle = "" } = props;

  // const sliderWidth = document.getElementById("slider").offsetWidth
  // const sliderCurrent = document.getElementById("slider")
  const sliderLeft = () => {
    const sliderRef = document.getElementById(id);
    const sliderWidth = document.getElementById(id).offsetWidth;
    console.log("sliderWidth", sliderWidth);
    sliderRef.scrollLeft = sliderRef.scrollLeft - sliderWidth;
  };
  const sliderRight = () => {
    const sliderRef = document.getElementById(id);
    const sliderWidth = document.getElementById(id).offsetWidth;
    console.log("sliderWidth", sliderWidth);
    sliderRef.scrollLeft = sliderRef.scrollLeft + sliderWidth;
  };
  return (
    <div className="sliderMainContsiner">
      {title !== "" && (
        <div>
          <span style={{ fontWeight: "bold", paddingLeft: "30px" }}>
            {title}
          </span>
        </div>
      )}
      {subTitle !== "" && (
        <div>
          <span>{subTitle}</span>
        </div>
      )}
      <div className="sliderFlexContainer">
        <div className="arrow" onClick={sliderLeft}>
          <span>{"<"}</span>
        </div>
        <div id={id} className="sliderContainer">
          {children}
        </div>
        <div className="arrow" onClick={sliderRight}>
          <span>{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default FullWidthSlider;
