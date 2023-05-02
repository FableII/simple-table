import React from "react";

interface SvgIconProp {
  name: string;
  dir: string;
  width?: string;
  height?: string;
  color?: string;
  fill?: string;
  className?: string;
}

export const SvgIcon = (props: SvgIconProp): JSX.Element => {
  const { width, height, color, name, dir, fill, className } = props;
  const symbolId = `#icon-${dir}-${name}`;
  return (
    <svg
      className={className}
      color={color}
      fill={fill}
      aria-hidden="true"
      width={width}
      height={height}
      name={name}
    >
      <use href={symbolId} />
    </svg>
  );
};

