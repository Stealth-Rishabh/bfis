"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up";
import { ArrowRight, ArrowLeft, Eye, Download } from "lucide-react";

// Gallery Images
import staffImage from "../assets/images/staff.jpg";
import infrastructureImage from "../assets/images/infra.jpg";

// Main Menu and Submenu Data
const mainMenu = [
  {
    label: "E-Newsletter 2021",
    submenu: [
      {
        label: "January 2021",
        url: "https://www.bfis.in/download/Jan2021.pdf",
      },
      {
        label: "February 2021",
        url: "https://www.bfis.in/download/Feb2021.pdf",
      },
      { label: "March 2021", url: "https://www.bfis.in/download/Mar2021.pdf" },
      {
        label: "April 2021",
        url: "https://www.bfis.in/download/April2021.pdf",
      },
      { label: "May 2021", url: "https://www.bfis.in/download/May2021.pdf" },
      { label: "June 2021", url: "https://www.bfis.in/download/June2021.pdf" },
      { label: "July 2021", url: "https://www.bfis.in/download/July2021.pdf" },
      {
        label: "August 2021",
        url: "https://www.bfis.in/download/August2021.pdf",
      },
      {
        label: "September 2021",
        url: "https://www.bfis.in/download/September2021.pdf",
      },
      {
        label: "October 2021",
        url: "https://www.bfis.in/download/OCTOBER_2021.pdf",
      },
      {
        label: "November 2021",
        url: "https://www.bfis.in/download/November21.pdf",
      },
      {
        label: "December 2021",
        url: "https://www.bfis.in/download/December2021.pdf",
      },
    ],
  },

  {
    label: "E-Newsletter 2022",
    submenu: [
      {
        label: "January 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/03/JANUARY_2022.pdf",
      },
      {
        label: "February 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/05/FEBRUARY_2022.pdf",
      },

      {
        label: "April 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/05/APRIL_2022.pdf",
      },
      {
        label: "May 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/06/BFIS_NEWSLETTER-MAY-2022.pdf",
      },
      {
        label: "June 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/07/11-BFIS-NEWLETTER-JUNE-2022.pdf",
      },
      {
        label: "July 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/08/12-BFIS-NEWLETTER-JULY-2022.pdf",
      },
      {
        label: "August 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/13-BFIS-NEWLETTER-AUGUST-2022.pdf",
      },
      {
        label: "September 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/11/14-BFIS-NEWSLETTER-SEPTEMBER-2022.pdf",
      },
      {
        label: "October 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/11/15-BFIS-NEWLETTER-OCTOBER-2022.pdf",
      },
      {
        label: "November 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/12/16-BFIS-NEWLETTER-NOVEMBER-2022.pdf",
      },
      {
        label: "December 2022",
        url: "https://www.bfis.in/wp-content/uploads/2023/01/17-BFIS-NEWSLETTER-DECEMBER-2022.pdf",
      },
    ],
  },

  {
    label: "E-Newsletter 2023",
    submenu: [
      {
        label: "January 2023",
        url: "https://www.bfis.in/wp-content/uploads/2023/03/18-BFIS-NEWLETTER-JANUARY-2023.pdf",
      },
      {
        label: "February 2023",
        url: "https://www.bfis.in/wp-content/uploads/2023/03/19-BFIS-NEWLETTER-FEBRUARY-2023.pdf",
      },

      {
        label: "March 2023",
        url: "https://www.bfis.in/wp-content/uploads/2023/04/20-BFIS-NEWLETTER-MARCH-2023.pdf",
      },

      {
        label: "April 2023 (SR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/05/21-BFIS-SR.-NEWLETTER-APRIL-2023-.pdf",
      },
      {
        label: "April 2023 (JR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-JR.-NEWLETTER-APRIL-2023.pdf",
      },
      {
        label: "May 2023(SR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-SR.-NEWLETTER-MAY-2023.pdf",
      },
      {
        label: "May 2023(JR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-JR.-NEWLETTER-MAY-2023.pdf",
      },
      {
        label: "June 2023(SR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-SR.-NEWLETTER-JUNE-2023.pdf",
      },
      {
        label: "June 2023(JR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-JR.-NEWLETTER-JUNE-2023.pdf",
      },
      {
        label: "July 2023(SR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-SR.-NEWLETTER-JULY-2023.pdf",
      },
      {
        label: "July 2023(JR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-JR.-NEWLETTER-JULY-2023.pdf",
      },
      {
        label: "August 2023(SR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-SR.-NEWLETTER-AUGUST-2023.pdf",
      },
      {
        label: "August 2023(JR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/09/BFIS-JR.-NEWLETTER-AUGUST-2023.pdf",
      },
      {
        label: "September 2023(SR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/12/BFIS-SR.-NEWLETTER-SEPTEMBER-2023_compressed.pdf",
      },
      {
        label: "September 2023(JR)",
        url: "https://www.bfis.in/wp-content/uploads/2023/12/BFIS-JR.-NEWLETTER-SEPTEMBER-2023_compressed.pdf",
      },
      {
        label: "October 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/11/15-BFIS-NEWLETTER-OCTOBER-2022.pdf",
      },
      {
        label: "November 2022",
        url: "https://www.bfis.in/wp-content/uploads/2022/12/16-BFIS-NEWLETTER-NOVEMBER-2022.pdf",
      },
      {
        label: "December 2022",
        url: "https://www.bfis.in/wp-content/uploads/2023/01/17-BFIS-NEWSLETTER-DECEMBER-2022.pdf",
      },
    ],
  },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Newsletter() {
  const [currentMenu, setCurrentMenu] = useState(mainMenu);
  const [previousMenu, setPreviousMenu] = useState(null);
  const [currentHeading, setCurrentHeading] = useState("Newsletter");
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleMenuClick = (submenu, label) => {
    if (submenu) {
      setPreviousMenu(currentMenu);
      setCurrentMenu(submenu);
      setCurrentHeading(label); // Update the heading to the main menu item label
    }
  };

  const handleBackClick = () => {
    setCurrentMenu(previousMenu);
    setPreviousMenu(null);
    setCurrentHeading("Newsletter"); // Reset the heading to the default title
  };

  const openLightbox = (images) => {
    setLightboxImages(images);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setLightboxImages([]);
  };

  const showNextImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex < lightboxImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPrevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : lightboxImages.length - 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2196F3]/10 to-[#4CAF50]/10 p-8">
      <motion.div
        className="max-w-lg w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
      >
        <WordPullUp
          words={currentHeading} // Use the current heading state
          className="text-4xl font-bold text-[#2196F3] mb-6 text-center"
        />

        <div className="space-y-4">
          {currentMenu.map((item, index) => (
            <button
              key={index}
              className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white py-4 rounded-lg transition-transform duration-150 hover:scale-105 flex items-center justify-between px-4"
              onClick={() => {
                if (item.submenu) handleMenuClick(item.submenu, item.label);
                else if (item.type === "gallery") openLightbox(item.images);
                else window.open(item.url, "_blank");
              }}
            >
              <span>{item.label}</span>
              {item.submenu ? (
                <ArrowRight className="h-5 w-5" />
              ) : item.type === "gallery" ? (
                <Eye className="h-5 w-5" />
              ) : (
                <Download className="h-5 w-5" />
              )}
            </button>
          ))}
        </div>

        {previousMenu && (
          <button
            className="mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-700 py-4 rounded-lg transition-transform duration-150 hover:scale-105 flex items-center justify-center"
            onClick={handleBackClick}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back
          </button>
        )}
      </motion.div>

      {/* Lightbox Popup */}
      {lightboxIndex !== null && lightboxImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <button
              onClick={showPrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl font-bold rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              &#10094;
            </button>
            <img
              src={lightboxImages[lightboxIndex]}
              alt="Gallery Image"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
            />
            <button
              onClick={showNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white text-3xl font-bold rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
