import React from "react";

export const ColorfulMessage = (props) => {
  // console.log(props);
  console.log("colorful");
  const { color, children } = props;
  const contentStyle = {
    // color: "blue",
    // color: props.color,
    // color: color,
    color,
    fontSize: "18px"
  };
  // return <p style={contentStyle}>{props.children}</p>;
  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
