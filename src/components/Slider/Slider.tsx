import React, { useState } from "react";
import "./Slider.css";
import { NAVIGATION } from "../../constants/constants";

export const Slider = (): JSX.Element => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    setActiveButtonIndex(index);
  };
  return (
    <div className="slider">
      <div className="nav-container">
        {/* TODO Прокинуть SVG елементы в компонент SvgIcon */}
        <svg
          className="svg-arrow-icon"
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.36035 3.40625L6.08398 5.32031V6.66016L0.492188 4.06934V3.2832L1.36035 3.40625ZM6.08398 1.83398L1.36719 3.77539L0.492188 3.87109V3.07812L6.08398 0.494141V1.83398Z"
            fill="#ACACAC"
          />
        </svg>

        {NAVIGATION.map((num: number, index: number) => {
          return (
            <button
              key={index}
              className={`nav-item ${
                activeButtonIndex === index ? "activeButton" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {num}
            </button>
          );
        })}
        {/* TODO Прокинуть SVG елементы в компонент SvgIcon */}
        <svg
          className="svg-arrow-icon"
          width="7"
          height="7"
          viewBox="0 0 7 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.7832 3.67969L0.922852 1.78613V0.480469L6.76074 3.06445V3.86426L5.7832 3.67969ZM0.922852 5.34766L5.79688 3.41309L6.76074 3.26953V4.0625L0.922852 6.65332V5.34766Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};
