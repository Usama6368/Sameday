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
function Header() {
  return (
    <Row
      style={{
        backgroundColor: colors.blue,
        color: colors.white,

        // padding: "10px 0px 10px 0px",
      }}
    >
      <div
        style={{
          width: "85%",
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
            fontSize: "1.5vw",
            marginBottom: "0px",
          }}
        >
          {[
            {
              name: "New York",
            },
            {
              name: "Office Hours: 24 / 7 Days A Week",
            },
            {
              name: "info@collectsameday.co.uk",
            },
            {
              name: "0800 102 6025",
            },
          ].map((item, index) =>
            item.name === "Search" ? (
              <BsSearch />
            ) : (
              <li
                style={{
                  cursor: "pointer",
                  marginRight: "10px",
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
            )
          )}
          <li
            style={{
              marginLeft: "10vw",
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
                  marginRight: "5px",
                }}
              >
                <FaFacebookF size={"1.5vw"} color={colors.white} />
              </li>
              <li
                style={{
                  marginRight: "5px",
                }}
              >
                <BsInstagram size={"1.5vw"} color={colors.white} />
              </li>
              <li
                style={{
                  marginRight: "5px",
                }}
              >
                <BsTwitter size={"1.5vw"} color={colors.white} />
              </li>
              <li>
                <FaLinkedinIn size={"1.5vw"} color={colors.white} />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        style={{
          width: "15%",
          backgroundColor: "#1A1F60",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1vw",
          height: "50px",
          fontWeight: "bold",
          fontSize: "1vw",
        }}
      >
        Get A free Quote
      </div>
    </Row>
  );
}

export default Header;
