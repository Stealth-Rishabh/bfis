/* eslint-disable react/prop-types */
import Marquee from "../../ui/marquee";

const images = [
  "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/2.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
  "https://www.bfis.in/info/admissions/images/gallery/6.jpg",
];

const firstRowImages = images.slice(0, images.length / 2);
const secondRowImages = images.slice(images.length / 2);

const ImageCard = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-64 h-40 cursor-pointer overflow-hidden rounded-xl">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};

export function GalleryTwo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden py-16">
      <div className="max-w-screen-xl w-full mx-auto text-center">
        <h2 className="text-dblue text-4xl md:text-6xl font-bold mb-8 sm:mt-12 font-roboto">
          What&apos;s Happening
        </h2>
        {/* Top Marquee */}
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRowImages.map((image, index) => (
            <ImageCard
              key={`top-${index}`}
              imageSrc={image}
              altText={`Gallery Image ${index + 1}`}
            />
          ))}
        </Marquee>

        {/* Bottom Marquee with reverse */}
        <Marquee reverse pauseOnHover className="[--duration:20s] mt-8">
          {secondRowImages.map((image, index) => (
            <ImageCard
              key={`bottom-${index}`}
              imageSrc={image}
              altText={`Gallery Image ${index + 1}`}
            />
          ))}
        </Marquee>
      </div>

      {/* Fog Effect with Gradient Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#E0F7FA] via-[#E0F7FA]/50 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#E0F7FA] via-[#E0F7FA]/50 to-transparent"></div>
    </div>
  );
}

export default GalleryTwo;
