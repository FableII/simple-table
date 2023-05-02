import React, { useState } from "react";
import { INITIAL_OPTION, OPTIONS } from "../../constants/constants";
import "./SelectInput.css";

export const SelectInput = (): JSX.Element => {
  const [option, setOption] = useState(INITIAL_OPTION);
  const [isOpen, setOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    setOption(option);
  };

  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    /* TODO Исправить баг, так как событийные механизмы Bootstrap в dropdown затирают мою логику ререндера иконки */
    <div className="dropdown">
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={handleToggle}
      >
        {option}
        <div className="btn-custom-icom">
          {/* TODO Вынести SVG в отдельный компонент */}
          {isOpen ? (
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3135 8L6.65662 2.34315L0.999768 8"
                stroke="#ACACAC"
                stroke-width="2"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L6.65685 6.65685L12.3137 1"
                stroke="#ACACAC"
                stroke-width="2"
              />
            </svg>
          )}
        </div>
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {OPTIONS.map((option: string, index: number) => (
          <button
            key={index}
            className="dropdown-item"
            onClick={() => {
              handleOptionChange(option);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
