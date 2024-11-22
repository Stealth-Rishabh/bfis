import { createBrowserRouter } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop"; // Adjust path as needed

// Main Pages
import ContactUs from "../pages/contact-us";
import Root from "../components/layout/root";
import HomeOne from "../pages/home-1";
import Admission from "../pages/admission";
import Academics from "../pages/academicspage";
import Infrastructure from "../pages/infrastructure";
import EventsGallery from "../pages/events";
import ProgramPage from "../pages/ProgramPage";
import PoliciesPage from "@/pages/policies";
import WorkWithUs from "@/pages/workWithUs";
import CBSEDisclosure from "@/pages/cbseDisclosure";
import Newsletter from "@/pages/newsletter";
// Component for handling dynamic subjects

// About Section Pages with Layout and Sidebar
import AboutLayout from "../components/sections/abouts/AboutLayout"; // Layout containing sidebar and breadcrumbs
import AboutMessage from "../components/sections/abouts/AboutMessage";
import AboutValues from "../components/sections/abouts/AboutValues";
import AboutSetUsApart from "../components/sections/abouts/AboutSetUsApart";

// Sidebar links for About section
const aboutSidebarLinks = [
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Our Values" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
];

// Create and export the router
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),
    children: [
      // Home Routes
      {
        path: "/",
        element: <HomeOne />,
      },
      {
        path: "/home",
        element: <HomeOne />,
      },

      // About Section with Layout and Sidebar
      {
        path: "/about",
        element: <AboutLayout sidebarLinks={aboutSidebarLinks} />, // Wrap About section with AboutLayout
        children: [
          { path: "", element: <AboutMessage /> }, // Default page for "/about"
          { path: "message", element: <AboutMessage /> }, // "/about/message"
          { path: "values", element: <AboutValues /> }, // "/about/values"
          { path: "set-us-apart", element: <AboutSetUsApart /> }, // "/about/set-us-apart"
        ],
      },

      // Academics Page Route
      {
        path: "/academics",
        element: <Academics />,
      },

      {
        path: "/infrastructure",
        element: <Infrastructure />,
      },

      // Programs Route with Dynamic Subroute
      {
        path: "/programs",
        element: <ProgramPage />,
      },

      {
        path: "/policies",
        element: <PoliciesPage />,
      },

      {
        path: "/work-with-us",
        element: <WorkWithUs />,
      },

      {
        path: "/cbse-disclosure",
        element: <CBSEDisclosure />,
      },

      {
        path: "/newsletter",
        element: <Newsletter />,
      },

      {
        path: "/events",
        element: <EventsGallery />,
      },

      // Additional Pages
      {
        path: "/contact-us",
        element: <ContactUs />,
      },

      // Admission Page Route
      {
        path: "/admission",
        element: <Admission />,
      },
    ],
  },
]);
