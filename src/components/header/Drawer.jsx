import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Drawer = () => {
  // Updated navlinks to match Navbar
  const navlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Programs", path: "/program" },
    { name: "Admissions", path: "/admission" },
    { name: "Infrastructure", path: "/infrastructure" },
    { name: "Events", path: "/events" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <Sheet>
      {/* Trigger for Mobile Drawer */}
      <SheetTrigger className="lg:hidden block">
        <Menu className="w-8 h-8 text-white" />
      </SheetTrigger>

      {/* Drawer Content */}
      <SheetContent className="bg-gradient-to-br from-[#003366] via-[#002244] to-[#001122]">
        <SheetHeader>
          {/* Drawer Title */}
          <SheetTitle className="text-white text-2xl font-bold text-left">
            Brookfield International School
          </SheetTitle>

          {/* Navigation Links */}
          <SheetDescription className="text-white text-left pt-5">
            <nav>
              <ul className="space-y-2">
                {navlinks.map((link, index) => (
                  <li key={index}>
                    <SheetClose asChild>
                      <Link
                        to={link.path}
                        className="block py-2 px-4 font-semibold text-slate-200 tracking-wide hover:bg-white/10 hover:text-white rounded transition duration-300"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;
