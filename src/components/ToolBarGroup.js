//@flow
import * as React from "react";

const defaultStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start"
};

type Props = {
  style?: {},
  right?: boolean,
  children: React.Node
};

export default function ToolbarGroup({
  style,
  right,
  children,
  ...rest
}: Props) {
  let passedStyle = style ? { ...defaultStyle, style } : defaultStyle;

  if (right) {
    passedStyle = { ...passedStyle, justifyContent: "flex-end" };
  }

  return (
    <div style={passedStyle} {...rest}>
      {children}
    </div>
  );
}
