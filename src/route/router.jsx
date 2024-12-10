import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

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
  { href: "/about/message", label: "Message" },
  { href: "/about/values", label: "Our Values" },
  { href: "/about/set-us-apart", label: "What Sets Us Apart" },
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
          element: (
            <>
              <Helmet>
                <title>BFIS - Best School in Chandigarh | Home</title>
                <meta
                  name="description"
                  content="Welcome to BFIS, the leading school in Chandigarh. We provide excellent education with state-of-the-art facilities and experienced faculty."
                />
              </Helmet>
              <HomeOne />
            </>
          ),
        },
        {
          path: "/home",
          element: <HomeOne />,
        },

        // About Section with Layout and Sidebar
        {
          path: "/about",
          element: (
            <>
              <Helmet>
                <title>About Us | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Learn about BFIS's vision, mission, and our commitment to providing quality education in Chandigarh. Discover what makes us unique."
                />
              </Helmet>
              <AboutLayout sidebarLinks={aboutSidebarLinks} />
            </>
          ),
          children: [
            { path: "", element: <Navigate to="message" replace /> },
            {
              path: "message",
              element: (
                <>
                  <Helmet>
                    <title>Principal's Message | BFIS Chandigarh</title>
                    <meta
                      name="description"
                      content="Read the inspiring message from our Principal about BFIS's educational philosophy and vision for student development."
                    />
                  </Helmet>
                  <AboutMessage />
                </>
              ),
            },
            {
              path: "values",
              element: (
                <>
                  <Helmet>
                    <title>Our Values | BFIS Chandigarh</title>
                    <meta
                      name="description"
                      content="Discover the core values that guide BFIS in nurturing young minds and shaping future leaders."
                    />
                  </Helmet>
                  <AboutValues />
                </>
              ),
            },
            {
              path: "set-us-apart",
              element: (
                <>
                  <Helmet>
                    <title>What Sets Us Apart | BFIS Chandigarh</title>
                    <meta
                      name="description"
                      content="Explore the unique features and advantages that make BFIS stand out among schools in Chandigarh."
                    />
                  </Helmet>
                  <AboutSetUsApart />
                </>
              ),
            },
          ],
        },

        // Academics Page Route
        {
          path: "/academics",
          element: (
            <>
              <Helmet>
                <title>Academic Programs | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Explore our comprehensive academic programs, curriculum, and teaching methodology at BFIS Chandigarh."
                />
              </Helmet>
              <Academics />
            </>
          ),
        },

        // Infrastructure Page
        {
          path: "/infrastructure",
          element: (
            <>
              <Helmet>
                <title>Infrastructure & Facilities | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Take a tour of our world-class infrastructure including smart classrooms, laboratories, sports facilities, and more."
                />
              </Helmet>
              <Infrastructure />
            </>
          ),
        },

        // Programs Route with Dynamic Subroute
        {
          path: "/program",
          element: (
            <>
              <Helmet>
                <title>Programs Offered | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Discover our diverse range of educational programs designed to nurture every student's potential."
                />
              </Helmet>
              <ProgramPage />
            </>
          ),
        },
        {
          path: "/program/:programId",
          element: <ProgramDetail subjects={subjects} />,
        },

        // Other Pages
        {
          path: "/policies",
          element: (
            <>
              <Helmet>
                <title>School Policies | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Learn about BFIS's policies, guidelines, and procedures that ensure a safe and productive learning environment."
                />
              </Helmet>
              <PoliciesPage />
            </>
          ),
        },
        {
          path: "/work-with-us",
          element: (
            <>
              <Helmet>
                <title>Career Opportunities | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Join our team of dedicated educators. Explore current job openings and career opportunities at BFIS Chandigarh."
                />
              </Helmet>
              <WorkWithUs />
            </>
          ),
        },
        {
          path: "/cbse-disclosure",
          element: (
            <>
              <Helmet>
                <title>CBSE Mandatory Disclosure | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="View BFIS's CBSE mandatory disclosure documents and compliance information."
                />
              </Helmet>
              <CBSEDisclosure />
            </>
          ),
        },
        {
          path: "/newsletter",
          element: (
            <>
              <Helmet>
                <title>School Newsletter | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Stay updated with BFIS's latest news, events, and achievements through our regular newsletter."
                />
              </Helmet>
              <Newsletter />
            </>
          ),
        },
        {
          path: "/uniform",
          element: (
            <>
              <Helmet>
                <title>School Uniform | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Information about BFIS's school uniform policy and guidelines for students."
                />
              </Helmet>
              <Uniform />
            </>
          ),
        },
        {
          path: "/books",
          element: (
            <>
              <Helmet>
                <title>Book List | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Access the complete list of textbooks and learning materials required for different classes at BFIS."
                />
              </Helmet>
              <BookList />
            </>
          ),
        },
        {
          path: "/events",
          element: (
            <>
              <Helmet>
                <title>Events & Gallery | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Browse through photos and updates from various events, celebrations, and activities at BFIS."
                />
              </Helmet>
              <EventsGallery />
            </>
          ),
        },
        {
          path: "/sports",
          element: (
            <>
              <Helmet>
                <title>Sports & Athletics | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Explore our comprehensive sports programs, facilities, and achievements in various athletic activities."
                />
              </Helmet>
              <SportsPage />
            </>
          ),
        },

        // Contact Us Page
        {
          path: "/contact-us",
          element: (
            <>
              <Helmet>
                <title>Contact Us | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Get in touch with BFIS. Find our location, contact details, and admission inquiry form."
                />
              </Helmet>
              <ContactUs />
            </>
          ),
        },

        // Admission Page
        {
          path: "/admission",
          element: (
            <>
              <Helmet>
                <title>Admissions | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="Learn about BFIS's admission process, eligibility criteria, and how to apply for enrollment."
                />
              </Helmet>
              <Admission />
            </>
          ),
        },

        // Catch-All Route for 404
        {
          path: "*",
          element: (
            <>
              <Helmet>
                <title>404 - Page Not Found | BFIS Chandigarh</title>
                <meta
                  name="description"
                  content="The page you are looking for does not exist. Please check the URL or navigate back to the homepage."
                />
              </Helmet>
              <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                404 - Page Not Found
              </h1>
            </>
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

// Option 2: HashRouter (as fallback if needed)
export const hashRouter = createHashRouter(
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
