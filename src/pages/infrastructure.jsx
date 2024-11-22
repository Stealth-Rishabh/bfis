/* eslint-disable react/prop-types */
"use client";

import { useState, useEffect } from "react";
import Marquee from "../components/ui/marquee";
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

const images = [
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
];

// Split images into three columns
const firstColumn = images.slice(0, Math.ceil(images.length / 3));
const secondColumn = images.slice(
  Math.ceil(images.length / 3),
  Math.ceil((2 * images.length) / 3)
);
const thirdColumn = images.slice(Math.ceil((2 * images.length) / 3));

const ImageCard = ({ src, onClick }) => (
  <div
    className="relative w-full cursor-pointer overflow-hidden rounded-lg"
    onClick={onClick}
  >
    <img
      src={src}
      alt="Infrastructure"
      className="w-full h-auto object-cover text-dblue  text-3xl md:text-5xl transition-transform duration-300 hover:scale-105"
    />
  </div>
);

export default function Infrastructure() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNextImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNextImage();
      if (event.key === "ArrowLeft") showPrevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative flex flex-col items-center h-screen w-full overflow-hidden rounded-lg">
      <h2 className="text-3xl font-bold my-4">Infrastructure</h2>

      <div className="flex w-full justify-around gap-4 h-full">
        {/* Column 1 */}
        <Marquee
          vertical
          pauseOnHover
          className="h-full flex flex-col gap-4 [--duration:45s]"
        >
          {firstColumn.map((src, index) => (
            <ImageCard
              key={index}
              src={src}
              onClick={() => openLightbox(index)}
            />
          ))}
        </Marquee>

        {/* Column 2 */}
        <Marquee
          vertical
          reverse
          pauseOnHover
          className="h-full flex flex-col gap-4 [--duration:50s]"
        >
          {secondColumn.map((src, index) => (
            <ImageCard
              key={index}
              src={src}
              onClick={() => openLightbox(firstColumn.length + index)}
            />
          ))}
        </Marquee>

        {/* Column 3 */}
        <Marquee
          vertical
          pauseOnHover
          className="hidden lg:flex h-full flex-col gap-4 [--duration:55s]"
        >
          {thirdColumn.map((src, index) => (
            <ImageCard
              key={index}
              src={src}
              onClick={() =>
                openLightbox(firstColumn.length + secondColumn.length + index)
              }
            />
          ))}
        </Marquee>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button
            className="absolute left-4 text-white text-3xl hover:text-gray-300"
            onClick={showPrevImage}
          >
            &#10094;
          </button>
          <img
            src={images[lightboxIndex]}
            alt={`Infrastructure ${lightboxIndex + 1}`}
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute right-4 text-white text-3xl hover:text-gray-300"
            onClick={showNextImage}
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
