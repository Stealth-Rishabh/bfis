import { useState } from "react";
import WordPullUp from "@/components/ui/word-pull-up";

const Gallery = () => {
  const images = [
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    "https://www.bfis.in/wp-content/uploads/2024/09/IMG_5100-1536x825.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
    "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-screen-xl mx-auto p-4 py-16 mb-16">
      <WordPullUp
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600 font-roboto mb-12"
        words="Gallery"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Top row */}
        <div
          className="md:col-span-1"
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[0]}
            alt="Gallery Image 1"
            className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 0
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
        <div
          className="md:row-span-2 md:col-span-1 relative"
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[1]}
            alt="Gallery Image 2"
            className={`md:absolute md:inset-0 w-full md:h-full h-auto object-cover rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 1
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
        <div
          className="md:col-span-1"
          onMouseEnter={() => setHoveredIndex(2)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[2]}
            alt="Gallery Image 3"
            className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 2
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
        {/* Bottom row */}
        <div
          className="md:col-span-1"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[3]}
            alt="Gallery Image 4"
            className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 3
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
        <div
          className="md:col-span-1"
          onMouseEnter={() => setHoveredIndex(4)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[4]}
            alt="Gallery Image 5"
            className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 4
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
        {/* Additional image only visible on mobile */}
        <div
          className="col-span-1 md:hidden"
          onMouseEnter={() => setHoveredIndex(5)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={images[5]}
            alt="Gallery Image 6"
            className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ${
              hoveredIndex !== null && hoveredIndex !== 5
                ? "blur-sm scale-95"
                : "blur-0 scale-100"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
