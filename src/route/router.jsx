import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "../components/ScrollToTop";
import ProgramDetail from "../components/ProgramDetail";
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
import Uniform from "@/pages/uniform";
import BookList from "@/pages/bookList";
import SportsPage from "../pages/SportsPage";
import AboutLayout from "../components/sections/abouts/AboutLayout";
import AboutMessage from "../components/sections/abouts/AboutMessage";
import AboutValues from "../components/sections/abouts/AboutValues";
import AboutSetUsApart from "../components/sections/abouts/AboutSetUsApart";

// Sidebar links for About section
const aboutSidebarLinks = [
  { href: "/BFIS/about/message", label: "Message" },
  { href: "/BFIS/about/values", label: "Our Values" },
  { href: "/BFIS/about/set-us-apart", label: "What Sets Us Apart" },
];

// Subjects (Import from ProgramPage if required)
import { subjects } from "../pages/ProgramPage";

// Create and export the router
export const router = createBrowserRouter(
  [
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
          element: <AboutLayout sidebarLinks={aboutSidebarLinks} />,
          children: [
            { path: "", element: <Navigate to="message" replace /> },
            {
              path: "message",
              element: <AboutMessage />,
            },
            {
              path: "values",
              element: <AboutValues />,
            },
            {
              path: "set-us-apart",
              element: <AboutSetUsApart />,
            },
          ],
        },

        // Academics Page Route
        {
          path: "/academics",
          element: <Academics />,
        },

        // Infrastructure Page
        {
          path: "/infrastructure",
          element: <Infrastructure />,
        },

        // Programs Route with Dynamic Subroute
        {
          path: "/program",
          element: <ProgramPage />,
        },
        {
          path: "/program/:programId",
          element: <ProgramDetail subjects={subjects} />,
        },

        // Other Pages
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
          path: "/uniform",
          element: <Uniform />,
        },
        {
          path: "/books",
          element: <BookList />,
        },
        {
          path: "/events",
          element: <EventsGallery />,
        },
        {
          path: "/sports",
          element: <SportsPage />,
        },

        // Contact Us Page
        {
          path: "/contact-us",
          element: <ContactUs />,
        },

        // Admission Page
        {
          path: "/admission",
          element: <Admission />,
        },

        // Catch-All Route for 404
        {
          path: "*",
          element: (
            <h1 style={{ textAlign: "center", marginTop: "50px" }}>
              404 - Page Not Found
            </h1>
          ),
        },
      ],
    },
  ],
  {
    basename: "/BFIS",
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
      v7_relativeSplat: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
    },
  }
);
