/* eslint-disable react/prop-types */
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

import eventOne1 from "@/assets/events/16Sept2024/img1.jpg";
import eventOne2 from "@/assets/events/16Sept2024/img2.jpg";
import eventOne3 from "@/assets/events/16Sept2024/img3.jpg";
import eventOne4 from "@/assets/events/16Sept2024/img4.jpg";
import eventTwo1 from "@/assets/events/13Sept2024/img1.jpg";
import eventTwo2 from "@/assets/events/13Sept2024/img2.jpg";
import eventTwo3 from "@/assets/events/13Sept2024/img3.jpg";
import eventThree1 from "@/assets/events/10Sept2024/img1.jpg";
import eventThree2 from "@/assets/events/10Sept2024/img2.jpg";
import eventThree3 from "@/assets/events/10Sept2024/img3.jpg";
import eventThree4 from "@/assets/events/10Sept2024/img4.jpg";
import eventThree5 from "@/assets/events/10Sept2024/img5.jpg";
import eventThree6 from "@/assets/events/10Sept2024/img6.jpg";
import eventThree7 from "@/assets/events/10Sept2024/img7.jpg";
import eventFour1 from "@/assets/events/8Spet2024/img1.jpg";
import eventFour2 from "@/assets/events/8Spet2024/img2.jpg";
import eventFour3 from "@/assets/events/8Spet2024/img3.jpg";
import eventFour4 from "@/assets/events/8Spet2024/img4.jpg";
import eventFive1 from "@/assets/events/5Spet2024/img1.jpg";
import eventFive2 from "@/assets/events/5Spet2024/img2.jpg";
import eventFive3 from "@/assets/events/5Spet2024/img3.jpg";
import eventFive4 from "@/assets/events/5Spet2024/img4.jpg";
import eventFive5 from "@/assets/events/5Spet2024/img5.jpg";
import eventFive6 from "@/assets/events/5Spet2024/img6.jpg";
import eventFive7 from "@/assets/events/5Spet2024/img7.jpg";
import eventFive8 from "@/assets/events/5Spet2024/img8.jpg";
import eventSix1 from "@/assets/events/29Aug2024/img1.jpg";
import eventSix2 from "@/assets/events/29Aug2024/img2.jpg";
import eventSix3 from "@/assets/events/29Aug2024/img3.jpg";
import eventSix4 from "@/assets/events/29Aug2024/img4.jpg";
import eventSeven1 from "@/assets/events/29Aug2024_2/img1.jpg";
import eventSeven2 from "@/assets/events/29Aug2024_2/img2.jpg";
import eventSeven3 from "@/assets/events/29Aug2024_2/img3.jpg";
import eventSeven4 from "@/assets/events/29Aug2024_2/img4.jpg";
import eventSeven5 from "@/assets/events/29Aug2024_2/img5.jpg";
import eventEight1 from "@/assets/events/28Aug2024/img1.jpg";
import eventEight2 from "@/assets/events/28Aug2024/img2.jpg";
import eventEight3 from "@/assets/events/28Aug2024/img3.jpg";
import eventEight4 from "@/assets/events/28Aug2024/img4.jpg";
import eventEight5 from "@/assets/events/28Aug2024/img5.jpg";
import eventEight6 from "@/assets/events/28Aug2024/img6.jpg";
import eventEight7 from "@/assets/events/28Aug2024/img7.jpg";
import eventNine1 from "@/assets/events/15Aug2024/img1.jpg";
import eventNine2 from "@/assets/events/15Aug2024/img2.jpg";
import eventNine3 from "@/assets/events/15Aug2024/img3.jpg";
import eventNine4 from "@/assets/events/15Aug2024/img4.jpg";
import eventNine5 from "@/assets/events/15Aug2024/img5.jpg";
import eventNine6 from "@/assets/events/15Aug2024/img6.jpg";
const events = [
  {
    id: 1,
    name: "STORY ENACTMENT KINDERGARTEN 16 Sept 2024",
    thumbnail: eventOne4,
    images: [eventOne1, eventOne2, eventOne3, eventOne4],
  },
  {
    id: 2,
    name: "CBSE Cluster Games 13 Sept 2024",
    thumbnail: eventTwo2,
    images: [eventTwo1, eventTwo2, eventTwo3],
  },
  {
    id: 3,
    name: "MEET THE COMMUNITY HELPERS 10 Sept 2024",
    thumbnail: eventThree1,
    images: [
      eventThree1,
      eventThree2,
      eventThree3,
      eventThree4,
      eventThree5,
      eventThree6,
      eventThree7,
    ],
  },
  {
    id: 4,
    name: "TOY DONATION-PRABH AASRA 8 Sept 2024",
    thumbnail: eventFour1,
    images: [eventFour1, eventFour2, eventFour3, eventFour4],
  },
  {
    id: 5,
    name: "Teacher's Day Celebration 5 Sept 2024",
    thumbnail: eventFive7,
    images: [
      eventFive1,
      eventFive2,
      eventFive3,
      eventFive4,
      eventFive5,
      eventFive6,
      eventFive7,
      eventFive8,
    ],
  },
  {
    id: 6,
    name: "National Sports Day 29 Aug 2024",
    thumbnail: eventSix1,
    images: [eventSix1, eventSix2, eventSix3, eventSix4],
  },
  {
    id: 7,
    name: "Mini Marathon 29 Aug 2024",
    thumbnail: eventSeven5,
    images: [eventSeven1, eventSeven2, eventSeven3, eventSeven4, eventSeven5],
  },
  {
    id: 8,
    name: "Krishna Janmashtami Festival 28 Aug 2024",
    thumbnail: eventEight3,
    images: [
      eventEight1,
      eventEight2,
      eventEight3,
      eventEight4,
      eventEight5,
      eventEight6,
      eventEight7,
    ],
  },
  {
    id: 9,
    name: "Independence Day Celebration 15 Aug 2024",
    thumbnail: eventNine5,
    images: [
      eventNine1,
      eventNine2,
      eventNine3,
      eventNine4,
      eventNine5,
      eventNine6,
    ],
  },
  // Additional events as required
];

const ITEMS_PER_PAGE = 6;

// Pagination component
const Pagination = ({ currentPage, totalPages, goToPage }) => {
  return (
    <ul className="flex items-center justify-center gap-3 mt-6">
      {/* Previous Button */}
      <li
        className={`w-8 h-8 flex justify-center items-center rounded-full text-lg cursor-pointer transition-colors ${
          currentPage === 1
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
        onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
      >
        <FaAngleLeft />
      </li>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <li
          key={index}
          className={`w-8 h-8 flex justify-center items-center rounded-full text-lg font-semibold cursor-pointer transition-colors ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "text-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </li>
      ))}

      {/* Next Button */}
      <li
        className={`w-8 h-8 flex justify-center items-center rounded-full text-lg cursor-pointer transition-colors ${
          currentPage === totalPages
            ? "text-gray-400 cursor-not-allowed"
            : "text-blue-600 hover:bg-blue-600 hover:text-white"
        }`}
        onClick={() => currentPage < totalPages && goToPage(currentPage + 1)}
      >
        <FaAngleRight />
      </li>
    </ul>
  );
};

export default function EventsGallery() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(events.length / ITEMS_PER_PAGE);
  const currentEvents = events.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setLightboxIndex(null);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNextImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex < selectedEvent.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showPrevImage = () => {
    setLightboxIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : selectedEvent.images.length - 1
    );
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Events Gallery</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentEvents.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: isEven ? -50 : 50 }} // Animate from top or bottom
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                onClick={() => openModal(event)}
              >
                <CardContent className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <img
                      src={event.thumbnail}
                      alt={event.name}
                      className="w-full h-48 object-cover rounded-md mb-2"
                    />
                    <h2 className="text-lg font-semibold">{event.name}</h2>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Pagination Component */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />

      {/* Modal for Event Images */}
      {isModalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">{selectedEvent.name}</h2>
              <Button variant="ghost" size="icon" onClick={closeModal}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedEvent.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${selectedEvent.name} - Image ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md cursor-pointer"
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Popup with Navigation */}
      {lightboxIndex !== null && selectedEvent && (
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
              src={selectedEvent.images[lightboxIndex]}
              alt="Event Image"
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
