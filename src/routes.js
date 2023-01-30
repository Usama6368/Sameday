import AboutUs from "./Layout/Pages/AboutUs/AboutUs";
import ContactUs from "./Layout/Pages/ContactUs/ContactUs";
import Home from "./Layout/Pages/Home/Home";
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
    path: "services",
    element: <Services />,
  },
  {
    path: "*",
    element: <NoPage />,
  },
];
