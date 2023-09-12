import React, { useState } from "react";
import { PlayCircle } from "react-bootstrap-icons";

const useOpenClose = (initialState = false) => {
  const [show, setShow] = useState(initialState);
  const OpenClose = (props) => {
    const style = {
      color: props.color || "red",
      rotate: show ? "90deg" : "0deg",
      ...props.style,
    };
    return (
      <PlayCircle
        className={props.className || ""}
        style={style}
        onClick={() => setShow(!show)}
      />
    );
  };
  return { show, setShow, OpenClose };
};

export default useOpenClose;
