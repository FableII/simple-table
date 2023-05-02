import React from "react";
import './Container.css'

type ContainerProps = {
  children: React.ReactNode;
};

export const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="container-fluid">{children}</div>;
};
