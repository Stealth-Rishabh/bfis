/* eslint-disable react/prop-types */
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

// Split images into columns
const firstColumn = images.slice(0, images.length / 3);
const secondColumn = images.slice(images.length / 3, (2 * images.length) / 3);
const thirdColumn = images.slice((2 * images.length) / 3);

const ImageCard = ({ src, onClick }) => {
  return (
    <div className="relative w-full max-w-xs cursor-pointer overflow-hidden rounded-xl border mb-4 lg:max-w-md">
      <img
        src={src}
        alt="Infrastructure"
        className="w-full h-auto rounded-xl hover:opacity-80 transition-opacity"
        onClick={onClick}
      />
    </div>
  );
};

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

  // Close the lightbox on pressing the "Esc" key
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
    <div className="relative flex flex-col items-center h-[100vh] w-full overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <h2 className="text-2xl font-bold my-4">Infrastructure</h2>

      <div className="flex w-full justify-around gap-4 h-full">
        {/* Render two columns on mobile, three on larger screens */}
        <Marquee
          vertical
          pauseOnHover
          className="[--duration:45s] h-full flex flex-col gap-4"
        >
          {(window.innerWidth < 768
            ? firstColumn.concat(secondColumn)
            : firstColumn
          ).map((src, index) => (
            <ImageCard
              key={index}
              src={src}
              onClick={() => openLightbox(index)}
            />
          ))}
        </Marquee>

        <Marquee
          vertical
          reverse
          pauseOnHover
          className="[--duration:50s] h-full flex flex-col gap-4"
        >
          {(window.innerWidth < 768 ? thirdColumn : secondColumn).map(
            (src, index) => (
              <ImageCard
                key={index}
                src={src}
                onClick={() => openLightbox(index)}
              />
            )
          )}
        </Marquee>

        {window.innerWidth >= 768 && (
          <Marquee
            vertical
            pauseOnHover
            className="[--duration:55s] h-full flex flex-col gap-4"
          >
            {thirdColumn.map((src, index) => (
              <ImageCard
                key={index}
                src={src}
                onClick={() => openLightbox(index)}
              />
            ))}
          </Marquee>
        )}
      </div>

      {/* Gradient overlay for top and bottom with reduced opacity */}
      <div className="pointer-events-none absolute top-0 h-1/4 w-full bg-gradient-to-b from-white/50 dark:from-background/50"></div>
      <div className="pointer-events-none absolute bottom-0 h-1/4 w-full bg-gradient-to-t from-white/50 dark:from-background/50"></div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity">
          <div className="relative p-4 bg-white rounded-lg shadow-lg max-w-4xl max-h-full overflow-auto">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-gray-700 text-3xl font-bold hover:text-gray-900 cursor-pointer"
            >
              &times;
            </button>
            <img
              src={images[lightboxIndex]}
              alt="Infrastructure Large View"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={showPrevImage}
                className="text-gray-700 text-3xl font-bold hover:text-gray-900 cursor-pointer"
              >
                &#10094;
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={showNextImage}
                className="text-gray-700 text-3xl font-bold hover:text-gray-900 cursor-pointer"
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
