/* eslint-disable react/prop-types */
"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import WordPullUp from "@/components/ui/word-pull-up";
import WordFadeIn from "@/components/ui/word-fade-in";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import prePrimary from "@/assets/images/webp/pre-primary.webp";
import primary from "@/assets/images/webp/primary.webp";
import middle from "@/assets/images/webp/middle.webp";
import highschool from "@/assets/images/webp/highschool.webp";
import seniorSecondarySchool from "@/assets/images/webp/seniorSecondarySchool.webp";
import smart from "@/assets/images/webp/smartl.webp";
import banner from "@/assets/images/webp/primaryBanner.webp";

const sections = [
  {
    id: "pre-primary",
    title: "Pre-Primary School",
    description: `The first chapter of your child’s education at Brookfield begins here and includes children aged between 3-5 years. During these formative years, a carefully integrated programme of learning is provided which covers seven key areas.`,
    highlights: [
      "Personal, Social and Emotional Development",
      "Communication and Language",
      "Physical Development",
      "Literacy",
      "Mathematics",
      "Understanding the World",
      "Expressive Arts and Design",
    ],
    image: prePrimary,
  },
  {
    id: "primary",
    title: "Primary School",
    description: `Grade I to IV at Brookfield is considered Primary School – the curriculum becomes broader to prepare your child for the next stage in his/her education. During this period, specialized classes for children also begin.`,
    highlights: [
      "English",
      "Hindi",
      "Sanskrit",
      "Social Studies",
      "General Science",
      "Physics",
      "Chemistry",
      "and more..",
    ],
    image: primary,
  },
  {
    id: "middle",
    title: "Middle School",
    description: `In addition to the core disciplines, students can choose electives from many of the courses we have to offer. Our curriculum is designed to facilitate real world learning.`,
    image: middle,
  },
  {
    id: "high-school",
    title: "High School",
    description: `BFIS provides a robust infrastructure tailored to enhance the high school experience for students. State-of-the-art classrooms equipped with modern technology foster an optimal learning environment.`,
    image: highschool,
  },
  {
    id: "senior-secondary",
    title: "Senior Secondary School",
    description: `The Senior Secondary School BFIS is equipped with advanced infrastructure and modern facilities. Our classrooms feature advanced technology, and we offer well-equipped science and computer labs for hands-on learning.`,
    image: seniorSecondarySchool,
  },
  {
    id: "smart-classes",
    title: "Smart Classes",
    description: `Students from classes pre-nursery to IX participate in the BFIS excellence programme. The school provides active E-learning facility through Smart Classes from pre-nursery to Class XII.`,
    image: smart,
  },
];

function scrollToHash() {
  const hash = window.location.hash.substring(1);
  if (hash) {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }
}

// Section Component
function Section({ section, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  // Determine if the index is even or odd for alternating layout
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} id={section.id}>
      {/* Desktop Layout */}
      <motion.div
        className={`hidden md:grid md:grid-cols-2 gap-8 items-start ${
          index >= 2 ? "overflow-hidden" : ""
        }`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        {isEven ? (
          <>
            {/* Image on the Left */}
            <motion.div
              initial={
                index < 2 ? { opacity: 0, scale: 0.8 } : { x: -200, opacity: 0 }
              } // Fade-in for "Pre-Primary" and "Primary", slide-in for others
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className={`max-w-screen-xl overflow-hidden rounded shadow-2xl h-60 w-full ${
                index < 2 ? "md:sticky top-8" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
            {/* Content on the Right */}
            <motion.div
              initial={
                index < 2 ? { opacity: 0, scale: 0.8 } : { x: 200, opacity: 0 }
              }
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4 overflow-hidden"
            >
              <h2 className="text-4xl font-bold text-indigo-900">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.description}</p>
              {section.highlights && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {section.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-white bg-opacity-50 backdrop-blur-md rounded shadow-sm text-indigo-900 font-medium transition-all duration-300 hover:bg-opacity-70 hover:shadow-md"
                    >
                      <ChevronRight className="mr-2 h-4 w-4" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => {
                  const target = document.getElementById(section.id);
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                Learn More
              </Button>
            </motion.div>
          </>
        ) : (
          <>
            {/* Content on the Left */}
            <motion.div
              initial={
                index < 2 ? { opacity: 0, scale: 0.8 } : { x: -200, opacity: 0 }
              }
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-4 overflow-hidden"
            >
              <h2 className="text-4xl font-bold text-indigo-900">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700">{section.description}</p>
              {section.highlights && (
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {section.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center p-3 bg-white bg-opacity-50 backdrop-blur-md rounded shadow-sm text-indigo-900 font-medium transition-all duration-300 hover:bg-opacity-70 hover:shadow-md"
                    >
                      <ChevronRight className="mr-2 h-4 w-4" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              )}
              <Button
                className="mt-4"
                variant="outline"
                onClick={() => {
                  const target = document.getElementById(section.id);
                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
              >
                Learn More
              </Button>
            </motion.div>
            {/* Image on the Right */}
            <motion.div
              initial={
                index < 2 ? { opacity: 0, scale: 0.8 } : { x: 200, opacity: 0 }
              }
              animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className={`overflow-hidden rounded shadow-2xl h-60 w-full ${
                index < 2 ? "md:sticky top-8" : ""
              }`}
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover rounded transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function Academics() {
  useEffect(scrollToHash, []); // Ensure scrolling to hash on mount

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <motion.div className="relative h-screen flex items-center justify-center">
          <div className="text-center z-10">
            <WordPullUp
              words="Academic Excellence at BFIS"
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-indigo-900 mb-4"
            />
            <WordFadeIn
              words="Discover our comprehensive programs for academic and personal growth."
              className="text-xl text-indigo-700"
            />
          </div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 bg-black"
            style={{ backgroundImage: `url(${banner})` }}
          />
        </motion.div>

        {/* Sections */}
        <div className="container mx-auto px-4 py-16 space-y-32">
          {sections.map((section, index) => (
            <Section key={section.id} section={section} index={index} />
          ))}
        </div>
      </div>
    </ParallaxProvider>
  );
}
