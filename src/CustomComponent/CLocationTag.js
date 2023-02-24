import React from "react";
import colors from "../config/colors";

export default function CLocationTag({ id }) {
  return (
    <span
      className="m-0 px-3 py-2"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        textTransform: "capitalize",
        backgroundColor: colors.blue,
        fontWeight: "bold",
        color: colors.white,
        borderStartEndRadius: "3px",
        boxShadow: "1px 2px 9px #00000050",
      }}
    >
      {id?.replace(/-/g, " ")}
    </span>
  );
}
