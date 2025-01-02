import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaEnvelope,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import Logo from "@/components/ui/logo";
import SocalIcons from "@/components/ui/socalIcons";
import CopyRight from "../components/sections/footers/copyRight";
import apple from "@/assets/images/shapes/apple.svg";
import scissors from "@/assets/images/shapes/scissors.svg";
import ScrollUp from "../components/sections/footers/scrollUp";
import Input from "@/components/ui/input";
import SlideUp from "@/lib/animations/slideUp";

const Footer = () => {
  return (
    <footer className="pt-20 bg-black relative">
      <div className="container">
        <div className="grid lg:grid-cols-[300px_auto_auto_268px] sm:grid-cols-2 grid-cols-1 gap-x-7.5 gap-y-10 justify-between text-center sm:text-left">
          <SlideUp delay={2}>
            <div className="flex justify-center sm:justify-start">
              <Logo
                className="text-white"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(255, 255, 255, 0.5))",
                }}
              />
            </div>
            <div className="mt-10">
              <p className="text-white opacity-80">
                We cultivate the potential of young minds to excel. Our dedication to comprehensive education guarantees that each child discovers their interests and achieves their utmost capabilities.
              </p>
              <SocalIcons
                prentClass={
                  "gap-5 lg:pt-7.5 pt-5 justify-center sm:justify-start"
                }
                className={
                  "w-9 h-9 bg-[#FFFFFF1A] border-none hover:bg-red-600"
                }
              />
            </div>
          </SlideUp>

          <SlideUp delay={3}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white inline-block">
                Quick Links
              </h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 min-w-[203px]">
              <li>
                <Link
                  to="/newsletter"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  to="/cbse-disclosure"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  CBSE Disclosure
                </Link>
              </li>
              <li>
                <Link
                  to="/uniform"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Uniform List
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Book List
                </Link>
              </li>
              <li>
                <Link
                  to="/work-with-us"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Work With Us
                </Link>
              </li>
              <li>
                <Link
                  to="/policies"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Policies & Governance
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.bfis.in/wp-content/uploads/2024/04/Fee-Structure-Session-2024-25.pdf"
                  className="text-white transition-all duration-500 hover:ml-[5px] hover:text-red-400"
                >
                  Fee Structure
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={4}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white">Contact</h3>
              <span className="block w-[130%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>

            <ul className="flex flex-col lg:gap-[15px] gap-2.5 lg:pt-7.5 pt-5 items-center sm:items-start">
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaLocationDot className="mt-1.5" />{" "}
                <span className="max-w-[168px]">
                  Sheikhpura, New Chandigarh, Kurali-Siswan Road, Dist. S.A.S
                  Nagar, Mohali, Pin: 140110
                </span>
              </li>
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaEnvelope className="mt-1.5" />{" "}
                <Link to="#" className="hover:text-red-400">
                  info@bfis.in
                </Link>
              </li>
              <li className="text-white flex gap-4 justify-center sm:justify-start">
                <FaPhone className="mt-1.5" />{" "}
                <Link to="#" className="hover:text-red-400">
                  +91-9066790662
                </Link>
              </li>
            </ul>
          </SlideUp>

          <SlideUp delay={5}>
            <div className="inline-block">
              <h3 className="text-2xl font-semibold text-white inline-block">
                Our Newsletter
              </h3>
              <span className="block w-[120%] h-[1px] mt-2 bg-red-600 relative after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:bg-red-600 after:h-1.5 after:w-1.5 after:rounded-full"></span>
            </div>
            <div className="lg:pt-7.5 pt-5">
              <p className="text-white">
                Subscribe to our newsletter to get our latest updates.
              </p>
              <form action="#" className="lg:mt-7.5 mt-5">
                <div className="relative overflow-hidden">
                  <Input
                    type={"email"}
                    placeholder={"Enter Your Email"}
                    className={
                      "rounded-md bg-[#FFFFFF1A] text-white placeholder:text-white max-h-15 border-none"
                    }
                  />
                  <button
                    type="submit"
                    className="absolute z-20 h-full right-0 top-1/2 -translate-y-1/2 py-5 px-7.5 bg-red-600 hover:bg-red-700 text-white rounded-tr-md rounded-br-md transition-colors duration-300"
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </SlideUp>
        </div>
        <CopyRight color={"text-white opacity-80"} />
      </div>
      <ScrollUp />
      <div>
        <div className="absolute right-[68px] top-[40%] animate-up-down">
          <img src={apple} alt="img" />
        </div>
        <div className="absolute left-[45%] lg:top-1/2 top-[40%]">
          <img src={scissors} alt="img" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
