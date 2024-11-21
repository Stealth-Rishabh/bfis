import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Arts from "../assets/images/Arts.jpg";
import Sciences from "../assets/images/sciences.jpg";
import Maths from "../assets/images/Maths.jpg";
import Robotics from "../assets/images/Robotics.jpg";
import LanguageStudies from "../assets/images/language_studies.jpg";

const subjects = [
  {
    id: "arts",
    title: "Arts",
    description:
      "Experimentation and risk-taking are fundamental to creative exploration. We urge pupils to flex their creativity without limitation.",
    highlight: "The creative sector is one of the fastest-growing sectors",
    image: Arts,
    bgColor: "#FFB800",
    animationDirection: "left",
  },
  {
    id: "science",
    title: "Sciences",
    description:
      "Science is core from day one. Biology, Chemistry, and Physics form a significant part of middle school studies.",
    highlight: "Foster a spirit of experimentation and inquiry",
    image: Sciences,
    bgColor: "#26A69A",
    animationDirection: "right",
  },
  {
    id: "math",
    title: "Mathematics",
    description:
      "Our curated curriculum provides deeper understanding and greater confidence in mathematical concepts, essential in today's world.",
    highlight: "Engaging classes with open-ended activities",
    image: Maths,
    bgColor: "#4CAF50",
    animationDirection: "left",
  },
  {
    id: "robotics",
    title: "Robotics",
    description:
      "Introducing students to automation, IoT, and the future. Robotics is rapidly becoming a main field subject.",
    highlight: "Connecting math and science beautifully",
    image: Robotics,
    bgColor: "#2196F3",
    animationDirection: "right",
  },
  {
    id: "language",
    title: "Language Studies",
    description:
      "As an international school, we emphasize global languages. Students can choose from various regional and international options.",
    languages: ["French", "German", "Spanish", "Italian"],
    image: LanguageStudies,
    bgColor: "#9C27B0",
    animationDirection: "left",
  },
];

const animationVariants = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
  visible: { opacity: 1, x: 0 },
});

const ProgramPage = () => {
  const location = useLocation();
  const subjectRefs = useRef({}); // Store refs for each subject

  // Scroll to the section if an ID is in the URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", ""); // Get the hash without #
    if (hash && subjectRefs.current[hash]) {
      // Defer scroll to ensure animations and layout adjustments are complete
      const scrollTimeout = setTimeout(() => {
        subjectRefs.current[hash].scrollIntoView({
          behavior: "smooth",
          block: "center", // Center the element on the screen
        });
      }, 500); // Delay scroll by 500ms to allow animation to complete
      return () => clearTimeout(scrollTimeout); // Cleanup timeout
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid gap-12">
        {subjects.map((subject) => (
          <motion.div
            key={subject.id}
            ref={(el) => (subjectRefs.current[subject.id] = el)} // Assign ref to each subject
            id={subject.id} // Add ID to the section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={animationVariants(subject.animationDirection)}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundColor: subject.bgColor }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center p-8">
              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
              >
                <img
                  src={subject.image}
                  alt={subject.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Text Section */}
              <div>
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={animationVariants(subject.animationDirection)}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-white"
                >
                  {subject.title}
                </motion.h2>
                <p className="text-white mt-4">{subject.description}</p>
                {subject.highlight && (
                  <p className="text-gray-200 font-semibold mt-4">
                    {subject.highlight}
                  </p>
                )}
                {subject.languages && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
                    {subject.languages.map((lang) => (
                      <button
                        key={lang}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-300 to-gray-100 hover:from-blue-400 hover:to-blue-600 hover:text-white font-medium shadow"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPage;
