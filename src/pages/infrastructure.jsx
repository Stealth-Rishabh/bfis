import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../components/ui/button";
import LazyLoad from "react-lazyload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import WordPullUp from "@/components/ui/word-pull-up";
import WordFadeIn from "@/components/ui/word-fade-in";

// Import images (remaining imports remain the same)
import gallery1 from "../assets/images/jpg/gallery1.jpg";
import gallery2 from "../assets/images/jpg/gallery2.jpg";
import gallery3 from "../assets/images/jpg/gallery3.jpg";
import gallery4 from "../assets/images/jpg/gallery4.jpg";
import gallery5 from "../assets/images/jpg/gallery5.jpg";
import gallery6 from "../assets/images/jpg/gallery6.jpg";
import gallery7 from "../assets/images/jpg/gallery7.jpg";
import gallery8 from "../assets/images/jpg/gallery8.jpg";
import gallery9 from "../assets/images/jpg/gallery9.jpg";
import gallery10 from "../assets/images/jpg/gallery10.jpg";
import gallery11 from "../assets/images/jpg/gallery11.jpg";
import gallery12 from "../assets/images/jpg/gallery12.jpg";
import gallery13 from "../assets/images/jpg/gallery13.jpg";
import gallery14 from "../assets/images/jpg/gallery14.jpg";
import gallery15 from "../assets/images/jpg/gallery15.jpg";
import gallery16 from "../assets/images/jpg/gallery16.jpg";
import gallery17 from "../assets/images/jpg/gallery17.jpg";
import gallery18 from "../assets/images/jpg/gallery18.jpg";
import gallery19 from "../assets/images/jpg/gallery19.jpg";
import gallery20 from "../assets/images/jpg/gallery20.jpg";

import sports4 from "@/assets/sports/img4.webp";
import sports5 from "@/assets/sports/img5.webp";
import sports6 from "@/assets/sports/img6.webp";
import sports7 from "@/assets/sports/img7.webp";
import sports8 from "@/assets/sports/img8.webp";
import sports9 from "@/assets/sports/img9.webp";
import sports10 from "@/assets/sports/img10.webp";
import sports11 from "@/assets/sports/img11.webp";
import sports12 from "@/assets/sports/img12.webp";
import sports13 from "@/assets/sports/img13.webp";
import sports14 from "@/assets/sports/img14.webp";
import sports15 from "@/assets/sports/img15.webp";
import sports16 from "@/assets/sports/img16.webp";
import sports17 from "@/assets/sports/img17.webp";
import sports18 from "@/assets/sports/img18.webp";
import sports19 from "@/assets/sports/img19.webp";
import sports20 from "@/assets/sports/img20.webp";
import sports21 from "@/assets/sports/img21.webp";
import sports22 from "@/assets/sports/img22.webp";
import sports23 from "@/assets/sports/img23.webp";
import sports24 from "@/assets/sports/img24.webp";
import sports25 from "@/assets/sports/img25.webp";
import sports26 from "@/assets/sports/img26.webp";
import sports27 from "@/assets/sports/img27.webp";
import sports28 from "@/assets/sports/img28.webp";

// Simulated Infrastructure & Sports Images
const infrastructureImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
]; // Add the real images
const sportsImages = [
  sports4,
  sports5,
  sports6,
  sports7,
  sports8,
  sports9,
  sports10,
  sports11,
  sports12,
  sports14,
  sports15,
  sports16,
  sports17,
  sports18,
  sports19,
  sports20,
  sports21,
  sports22,
  sports23,
  sports24,
  sports25,
  sports26,
  sports27,
  sports28,
]; // Add real sports images

const categories = [
  { id: "all", label: "All" },
  { id: "sports", label: "Sports" },
  { id: "infrastructure", label: "Infrastructure" },
];

const Infrastructure = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const IMAGES_PER_PAGE = 8;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Memoized filtered images
  const filteredImages = useMemo(() => {
    switch (selectedCategory) {
      case "sports":
        return sportsImages; // Return all images for pagination
      case "infrastructure":
        return infrastructureImages;
      default:
        return [...infrastructureImages, ...sportsImages];
    }
  }, [selectedCategory]);

  // Pagination Logic
  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const visibleImages = filteredImages.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  return (
    <section className="relative min-h-screen container">
      <div className="py-12">
        <WordPullUp
          className="text-red-600 text-center text-3xl lg:text-5xl mb-4"
          words="Explore Our Infrastructure"
        />
        <WordFadeIn
          className="text-gray-500 text-xl text-center mb-12"
          words="Discover our state-of-the-art facilities and achievements."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1); // Reset to first page when changing category
              }}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleImages.map((image, index) => (
            <LazyLoad
              key={index}
              height={300}
              offset={150}
              once
              placeholder={<div className="bg-gray-300 h-full w-full"></div>}
            >
              <div
                className={`relative rounded-lg overflow-hidden shadow-lg bg-white h-96 transition-all duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "blur-sm"
                    : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredIndex === index ? "scale-110" : ""
                  }`}
                />
              </div>
            </LazyLoad>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-gray-700">
            Page {currentPage} of{" "}
            {Math.ceil(filteredImages.length / IMAGES_PER_PAGE)}
          </span>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(filteredImages.length / IMAGES_PER_PAGE)
                )
              )
            }
            disabled={
              currentPage === Math.ceil(filteredImages.length / IMAGES_PER_PAGE)
            }
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
