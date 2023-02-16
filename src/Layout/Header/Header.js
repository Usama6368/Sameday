// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { BsSearch } from "react-icons/bs";
// import colors from "../../config/colors";
// import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
// import { BsInstagram, BsTwitter } from "react-icons/bs";
// import { BiChevronDown } from "react-icons/bi";
// function Header() {
//   return (
//     <Row
//       style={{
//         backgroundColor: colors.blue,
//         color: colors.white,
//       }}
//     >
//       <Col
//         style={{
//           padding: 0,
//           margin: 0,
//         }}
//         sm={12}
//         md={7}
//         lg={7}
//         xl={7}
//       >
//         <ul
//           style={{
//             color: colors.white,
//             listStyle: "none",
//             display: "flex",
//             fontSize: "15px",
//             marginBottom: "0px",
//           }}
//         >
//           {[
//             {
//               name: "New York",
//             },
//             {
//               name: "Office Hours: 24 / 7 Days A Week",
//             },
//             {
//               name: "info@collectsameday.co.uk",
//             },
//             {
//               name: "0800 102 6025",
//             },
//           ].map((item, index) =>
//             item.name === "Search" ? (
//               <BsSearch />
//             ) : (
//               <li
//                 style={{
//                   cursor: "pointer",
//                   marginRight: "10px",
//                 }}
//               >
//                 {item.name}
//                 {index === 0 && (
//                   <BiChevronDown
//                     style={{
//                       marginLeft: "5px",
//                     }}
//                   />
//                 )}
//               </li>
//             )
//           )}
//         </ul>
//       </Col>

//       <Col
//         style={{
//           padding: 0,
//           margin: 0,
//         }}
//         sm={12}
//         md={3}
//         lg={3}
//         xl={3}
//       >
//         <ul
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             listStyle: "none",
//             justifyContent: "flex-end",
//             marginBottom: "0px",

//             padding: 0,
//             margin: 0,
//           }}
//         >
//           <li
//             style={{
//               marginRight: "20px",
//             }}
//           >
//             <FaFacebookF size={"20px"} color={colors.white} />
//           </li>
//           <li
//             style={{
//               marginRight: "20px",
//             }}
//           >
//             <BsInstagram size={"20px"} color={colors.white} />
//           </li>
//           <li
//             style={{
//               marginRight: "20px",
//             }}
//           >
//             <BsTwitter size={"20px"} color={colors.white} />
//           </li>
//           <li style={{}}>
//             <FaLinkedinIn size={"20px"} color={colors.white} />
//           </li>
//         </ul>
//       </Col>
//       <Col
//         style={{
//           backgroundColor: "#1A1F60",
//           justifyContent: "center",
//           alignItems: "center",
//           display: "flex",
//         }}
//         sm={12}
//         md={2}
//         lg={2}
//         xl={2}
//       >
//         <p>Get a free quote</p>
//       </Col>
//     </Row>
//   );
// }

// export default Header;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import colors from "../../config/colors";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import "./Header.css";
function Header() {
  const navigation = useNavigate();
  const fontSize = "1.2vw";

  return (
    <Row
      className="topheader"
      style={{
        backgroundColor: colors.blue,
        color: colors.white,

        // padding: "10px 0px 10px 0px",
      }}
    >
      <div
        style={{
          width: "87%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            color: colors.white,
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            fontSize: fontSize,
            marginBottom: "0px",
          }}
        >
          {[
            {
              name: "Office Hours: 24 / 7 Days A Week",
            },
            {
              name: "info@collectsameday.co.uk",
            },
            {
              name: "0800 102 6025",
            },
          ].map((item, index) => (
            <li
              style={{
                cursor: "pointer",
                marginRight: "15px",
              }}
            >
              {item.name}
              {index === 0 && (
                <BiChevronDown
                  style={{
                    marginLeft: "5px",
                  }}
                />
              )}
            </li>
          ))}
          <li
            style={{
              marginLeft: "22vw",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                listStyle: "none",
                alignItems: "center",
                marginBottom: "0px",

                padding: 0,
                margin: 0,
              }}
            >
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <FaFacebookF size={fontSize} color={colors.white} />
              </li>
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <BsInstagram size={fontSize} color={colors.white} />
              </li>
              <li
                style={{
                  marginRight: "10px",
                }}
              >
                <BsTwitter size={fontSize} color={colors.white} />
              </li>
              <li>
                <FaLinkedinIn size={fontSize} color={colors.white} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        onClick={() => {
          navigation("/quote");
          window.scrollTo(0, 0);
        }}
        style={{
          width: "13%",
          backgroundColor: "#1A1F60",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: fontSize,
          height: "75px",
          fontWeight: "bold",
          textAlign: "center",

          cursor: "pointer",
        }}
      >
        Get A free Quote
      </div>
    </Row>
  );
}

export default Header;
