import React, { useState } from "react";
import { Form } from "react-bootstrap";
import colors from "../config/colors";
import cities from "../../src/config/info.json";
import { useNavigate } from "react-router-dom";
export default function CCitySearch() {
  const [search, setSearch] = useState("");
  const [data] = useState(cities.cities);
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Form.Control
        onChange={(e) => setSearch(e.target.value)}
        className="mb-1"
        style={{
          backgroundColor: "#DCDCDC",
          borderStyle: "none",
          height: "35px",
          borderRadius: search.length > 0 && data.length > 0 ? "0px" : "3px",
          color: colors.white,
          margin: "20px 0px 20px 0px",
        }}
        type="text"
      />
      {search.length > 0 && data.length > 0 && (
        <div
          className=""
          style={{
            maxHeight: "200px",
            boxShadow: "1px 2px 9px #00000050",
            position: "absolute",
            overflow: "scroll",
            backgroundColor: "#ffffff",
            width: "38.4%",
            marginLeft: "0px",
            cursor: "pointer",
          }}
        >
          {data
            .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()))
            .map((item, index) => (
              <p
                onClick={() => {
                  navigate(
                    `/location/${item.name.replace(/\s+/g, "-").toLowerCase()}`
                  );
                  window.scrollTo(0, 0);
                }}
                className="m-0 p-1"
                key={index}
              >
                {item.name}
              </p>
            ))}
        </div>
      )}
    </div>
  );
}
