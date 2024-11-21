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
    label: "A. Appendix 11",
    submenu: [
      {
        label: "Appendix 9",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/Inspection-Report-SARAS.pdf",
      },
    ],
  },
  {
    label: "B. Documents & Information",
    submenu: [
      {
        label: "CBSE Affiliation Letter",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/CBSE-AFFILIATION.pdf",
      },
      {
        label: "Trust Deed",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/TRUST-DEED.pdf",
      },
      {
        label: "NOC",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/NOC.pdf",
      },
      {
        label: "Recognition Certificate under RTE",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/RTE.pdf",
      },
      {
        label: "Building Safety Certificate",
        url: "https://www.bfis.in/wp-content/uploads/2024/04/building-safet-certificate.pdf",
      },
      {
        label: "Fire Safety Certificate",
        url: "https://www.bfis.in/wp-content/uploads/2024/04/Punjab-Fire-Services-1_page-0001.pdf",
      },
      {
        label: "Deo Certificate",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/DEO-CERTIFICATE.pdf",
      },
      {
        label: "Water, Health & Sanitisation Certificate",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/WATER-HEALTH-AND-SANITATION-CERTIFICATE.pdf",
      },
    ],
  },
  {
    label: "C. Results & Academics",
    submenu: [
      {
        label: "Fee Structure",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/FEE-STRUCTURE.pdf",
      },
      {
        label: "Annual Calendar",
        url: "https://www.bfis.in/wp-content/uploads/2022/09/Annual-Calender.pdf",
      },
      {
        label: "School Management Committee",
        url: "https://www.bfis.in/wp-content/uploads/2021/03/SMC-min-scaled.jpg",
      },
      {
        label: "Parents Teacher Association",
        url: "https://www.bfis.in/wp-content/uploads/2021/03/4-scaled.jpg",
      },
      {
        label: "School Leaving Certificate",
        url: "https://www.bfis.in/wp-content/uploads/2021/03/SLC-min-scaled.jpg",
      },
      {
        label: "Class wise student strength",
        url: "https://www.bfis.in/wp-content/uploads/2021/03/6-1-scaled.jpg",
      },
    ],
  },
  {
    label: "D. Staff (Teaching)",
    submenu: [
      {
        label: "Staff Details",
        images: [staffImage],
        type: "gallery",
      },
    ],
  },
  {
    label: "E. School Infrastructure",
    submenu: [
      {
        label: "Infrastructure",
        images: [infrastructureImage],
        type: "gallery",
      },
    ],
  },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function CBSEDisclosure() {
  const [currentMenu, setCurrentMenu] = useState(mainMenu);
  const [previousMenu, setPreviousMenu] = useState(null);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleMenuClick = (submenu) => {
    if (submenu) {
      setPreviousMenu(currentMenu);
      setCurrentMenu(submenu);
    }
  };

  const handleBackClick = () => {
    setCurrentMenu(previousMenu);
    setPreviousMenu(null);
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
          words={previousMenu ? "Submenu" : "CBSE Disclosure"}
          className="text-4xl font-bold text-[#2196F3] mb-6 text-center"
        />

        <div className="space-y-4">
          {currentMenu.map((item, index) => (
            <button
              key={index}
              className="w-full bg-[#4CAF50] hover:bg-[#388E3C] text-white py-4 rounded-lg transition-transform duration-150 hover:scale-105 flex items-center justify-between px-4"
              onClick={() => {
                if (item.submenu) handleMenuClick(item.submenu);
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
