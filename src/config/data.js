import { formatString } from "../functions/javascript";
import colors from "./colors";

export const links = [
  "Same Day Courier",
  "Urgent Courier Service",
  "Scheduled Couriers",
  "Same Day Business Couriers",
  "Last Mile Delivery",
];

export const link1 = [
  "Pallet Courier Service",
  "Refrigerated Courier Service",
  "Legal & Documents Courier",
  "Medical Courier Service",
  "Engineering Parts Courier",
  "Hazardous Goods Couriers",
  "High Value & Fragile Goods",
  "Hiab & Moffett Mounty Couriers",
];

export const pages = [
  {
    name: "Same Day Courier",
    link: "/services/same-day-courier",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Locations",
    link: "/locations",
  },

  {
    name: "About",
    link: "/aboutus",
  },
  {
    name: "Contact",
    link: "/contactus",
  },
];

const detailStyle = {
  color: "black",
  fontSize: "16px",
};

export const serviceArray = {
  "same-day-courier": [
    <span style={detailStyle}>
      Our dedicated, round the clock Collect Same Day Couriers service is
      available, throughout mainland UK, every day of the year, with over 15,000
      vehicles in our fleet from bikes to trucks providing you with a complete
      logistics solution.
    </span>,
    <div
      style={{
        color: "black",
        fontSize: "15px",
        fontWeight: 600,
        margin: "20px 0px 0px 0px",
      }}
    >
      Whatever, wherever, whenever. We deliver across the country UK 24/7.
    </div>,
    <span style={detailStyle}>
      No matter what your consignment, no matter where it needs to go, no matter
      whether you’re a multinational corporation or an small business, we’ll
      collect your time and condition-critical goods within one hour and deliver
      it to any UK destination the same day – guaranteed. Your package will be
      carried by a dedicated vehicle courier with only your goods on board, and
      all consignments are fully insured for your peace of mind.
    </span>,
    <div
      style={{
        color: "black",
        fontSize: "15px",
        fontWeight: 600,
        margin: "20px 0px 0px 0px",
      }}
    >
      Same Day Scheduled Courier Services
    </div>,
    <span style={detailStyle}>
      Whatever specialist delivery services you need, we can help with that too.
      We can offer confidential document collection and delivery, a same day
      wait and return courier service, same-day heavy goods delivery and
      aviation same-day deliveries. If you have a critically urgent parcel
      delivery, whether its components, servers or other hardware, we can handle
      it – just as we can everything from engineering tools and equipment to
      emergency deliveries of medical equipment, supplies or general goods –
      wherever it needs to go. We offer a personalised scheduled courier service
      that is reliable 24 hours per day, 7 days per week. Our network of
      vehicles are all over the UK so we’re guaranteed to have the perfect
      courier to transport your package.
    </span>,
    <ul style={{ margin: "20px 0px 20px 0px" }}>
      <li> Courier collection within 60 mins from anywhere</li>
      <li> Instant quotes</li>
      <li> Delivery and collection to and from anywhere in the UK</li>
      <li> 24/7 customer service</li>
      <li> 15,000 vehicles nationwide</li>
      <li> All consignments fully insured </li>
      <li> Same day wait and return service available</li>
      <li>
        Personal service with real people that will help make sure you get
        exactly what you need today.
      </li>
    </ul>,
  ],

  "urgent-courier-service": [
    <span style={detailStyle}>
      Our dedicated, round the clock Collect Same Day Couriers service is
      available, throughout mainland UK, every day of the year, with over 15,000
      vehicles in our fleet from bikes to trucks providing you with a complete
      logistics solution.
    </span>,
    <ul style={{ margin: "20px 0px 20px 0px" }}>
      <li> Courier collection within 60 mins from anywhere</li>
      <li> Instant quotes</li>
      <li> Delivery and collection to and from anywhere in the UK</li>
      <li> 24/7 customer service</li>
      <li> 15,000 vehicles nationwide</li>
      <li> All consignments fully insured </li>
      <li> Same day wait and return service available</li>
      <li>
        Personal service with real people that will help make sure you get
        exactly what you need today.
      </li>
    </ul>,
  ],

  "scheduled-couriers": [],
  "same-day-business-couriers": [],
  "last-mile-delivery": [],
  "pallet-courier-service": [],
  "refrigerated-courier-service": [],
  "legal-&-documents-courier": [],
  "medical-courier-service": [],
  "engineering-parts-courier": [],
  "hazardous-goods-couriers": [],
  "high-value-&-fragile-goods": [],
  "hiab-&-moffett-mounty-couriers": [],
  "same-day-pallet-couriers": [],
  "same-day-it-equipment-couriers": [],
  "same-day-construction-couriers": [],
  "same-day-document-couriers": [],
  "same-day-medical-couriers": [],
};

export const serviceHeaderArray = (id) => {
  let arr = {
    "same-day-courier": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],

    "urgent-courier-service": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )}Couriers is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} Couriers is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],

    "scheduled-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "same-day-business-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "last-mile-delivery": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "pallet-courier-service": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "refrigerated-courier-service": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "legal-&-documents-courier": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "medical-courier-service": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "engineering-parts-courier": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "hazardous-goods-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "high-value-&-fragile-goods": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "hiab-&-moffett-mounty-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],

    "same-day-pallet-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "same-day-it-equipment-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "same-day-construction-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "same-day-document-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
    "same-day-medical-couriers": [
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
      `Collect ${id.replace(
        /-/g,
        "  "
      )} is your best choice for same day courier services and provides excellent local & nationwide courier services at affordable prices. We are the UK’s most reliable urgent & same day courier service provider.`,
    ],
  };
  return arr[id];
};

export const locationHeaderArray = (id) => {
  let arr = (
    <>
      <span
        style={{
          color: colors.white,
          textAlign: "justify",
        }}
      >
        Collect
        <b
          className="mx-1"
          style={{
            fontWeight: "bold",
            color: colors.white,
            textTransform: "capitalize",
          }}
        >
          {formatString(id)}
        </b>
        is your best choice for same day courier services and provides excellent
        local & nationwide courier services at affordable prices. We are the
        UK’s most reliable urgent & same day courier service provider.
      </span>
      <br />
      <br />
      <span
        style={{
          color: colors.white,
          textAlign: "justify",
        }}
      >
        Collect
        <b
          className="mx-1"
          style={{
            fontWeight: "bold",
            color: colors.white,
            textTransform: "capitalize",
          }}
        >
          {formatString(id)}
        </b>
        is your best choice for same day courier services and provides excellent
        local & nationwide courier services at affordable prices. We are the
        UK’s most reliable urgent & same day courier service provider.
      </span>
      <br />
      <br />
    </>
  );

  return arr;
};

export const locationSectionHeader = (id) => {
  let arr = (
    <>
      <span
        style={{
          color: "#000000",
          textAlign: "justify",
        }}
      >
        Collect
        <b
          className="mx-1"
          style={{
            fontWeight: "bold",
            color: colors.blue,
            textTransform: "capitalize",
          }}
        >
          {formatString(id)}
        </b>
        is your best choice for same day courier services and provides excellent
        local & nationwide courier services at affordable prices. We are the
        UK’s most reliable urgent & same day courier service provider.
      </span>
      <br />
      <br />
      <span
        style={{
          color: "#000000",
          textAlign: "justify",
        }}
      >
        Collect
        <b
          className="mx-1"
          style={{
            fontWeight: "bold",
            color: colors.blue,
            textTransform: "capitalize",
          }}
        >
          {formatString(id)}
        </b>
        is your best choice for same day courier services and provides excellent
        local & nationwide courier services at affordable prices. We are the
        UK’s most reliable urgent & same day courier service provider.
      </span>
      <br />
      <br />
    </>
  );

  return arr;
};
