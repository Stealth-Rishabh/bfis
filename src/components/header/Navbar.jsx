import { NavLink } from "react-router-dom";
import logo from "@/assets/images/logo.webp";
import Drawer from "./Drawer";

export default function Navbar() {
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Programs", path: "/programs" },
    { name: "Admissions", path: "/admission" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <div className="px-4 py-4 bg-[#003366] shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo with Subtle Drop Shadow */}
        <div className="flex items-center space-x-10">
          <NavLink to="/" aria-label="Home">
            <img
              src={logo}
              alt="Brookfield International School Logo"
              className="object-contain lg:h-24 md:h-20 sm:h-16 h-12"
              style={{
                filter: "drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.5))", // Softer shadow for better balance
              }}
            />
          </NavLink>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4">
            {navlinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#90caf9] border-b-2 border-[#90caf9] px-3 py-2"
                      : "text-white hover:text-[#66bb6a] rounded px-3 py-2 transition-colors duration-300"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div className="lg:hidden">
          <Drawer />
        </div>
      </div>
    </div>
  );
}
