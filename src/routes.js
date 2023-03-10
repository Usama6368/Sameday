import AboutUs from "./Layout/Pages/AboutUs/AboutUs";
import ContactUs from "./Layout/Pages/ContactUs/ContactUs";
import Form from "./Layout/Pages/Form/Form";
import Home from "./Layout/Pages/Home/Home";
import Location from "./Layout/Pages/Location/Location";
import NoPage from "./Layout/Pages/NoPage/NoPage";
import Services from "./Layout/Pages/Services/Services";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "contactus",
    element: <ContactUs />,
  },
  {
    path: "services/:id",
    element: <Services />,
  },
  {
    path: "location/:id",
    element: <Location />,
  },
  {
    path: "quote",
    element: <Form />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
