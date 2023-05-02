import React from "react";
import "./DateInput.css";

interface DateProps {
  dateText: string;
}

export const DateInput = ({ dateText }: DateProps): JSX.Element => {
  return (
    <div className="date-container">
      <div className="date-text">{dateText}</div>
      <input type="date" className="date-input" />
    </div>
  );
};
