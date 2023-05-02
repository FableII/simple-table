import React from "react";
import "./Table.css";
import {
  FIRST_ROW,
  IDs,
  SECOND_ROW,
  TABLE_HEAD,
} from "../../constants/constants";

export const Table = (): JSX.Element => {
  return (
    <div className="table-container">
      <table className="table table-hover">
        <thead className="table-head">
          <tr className="table-head-row">
            {TABLE_HEAD.map((text: string, index: number) => {
              return (
                <th key={index} className="table-head-item" scope="col">
                  {text}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table-body">
          <tr className="table-body-row">
            <th className="table-body-item" scope="row">
              {IDs.First}
            </th>
            {FIRST_ROW.map((text: string, index: number) => {
              return (
                <th key={index} className="table-body-item">
                  {text}
                </th>
              );
            })}
          </tr>
          <tr className="table-body-row">
            <th className="table-body-item" scope="row">
              {IDs.Second}
            </th>

            {SECOND_ROW.map((text: string, index: number) => {
              return (
                <th key={index} className="table-body-item">
                  {text}
                </th>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
