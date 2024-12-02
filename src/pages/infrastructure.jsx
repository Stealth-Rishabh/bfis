import React, { useState, useMemo } from "react";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import WordPullUp from "@/components/ui/word-pull-up";
import WordFadeIn from "@/components/ui/word-fade-in";

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

const categories = [
  { id: "all", label: "All" },
  { id: "culture", label: "Culture & Arts" },
  { id: "tech", label: "Technology" },
  { id: "sports", label: "Sports" },
  { id: "education", label: "Education" },
];

const dateFilters = [
  { id: "all", label: "All Time" },
  { id: "past", label: "Past Events" },
  { id: "upcoming", label: "Upcoming Events" },
];

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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const isDateBefore = (dateString, compareDate) => {
  return new Date(dateString) < compareDate;
};

const isDateAfter = (dateString, compareDate) => {
  return new Date(dateString) > compareDate;
};

const Infrastructure = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [focus, setFocus] = useState(null);

  const events = useMemo(
    () =>
      images.map((image, index) => ({
        id: index + 1,
        date: `2024-0${(index % 12) + 1}-15`, // Spread over months
        category: categories[index % categories.length].id,
        image,
      })),
    []
  );

  const filteredEvents = useMemo(() => {
    const today = new Date();

    return events.filter((event) => {
      const categoryMatch =
        selectedCategory === "all" || event.category === selectedCategory;

      let dateMatch = true;
      if (dateFilter === "past") {
        dateMatch = isDateBefore(event.date, today);
      } else if (dateFilter === "upcoming") {
        dateMatch = isDateAfter(event.date, today);
      }

      return categoryMatch && dateMatch;
    });
  }, [events, selectedCategory, dateFilter]);

  return (
    <section className="relative min-h-screen container">
      <div className="py-12">
        <WordPullUp
          className="text-red-600 text-center text-3xl lg:text-5xl mb-4"
          words="Explore Our Infrastructure"
        />
        {/* Animated Subheading */}
        <WordFadeIn
          className="text-gray-500 text-xl text-center mb-12"
          words="Discover our state-of-the-art facilities and achievements."
        />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Date Filter */}
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by date" />
            </SelectTrigger>
            <SelectContent>
              {dateFilters.map((filter) => (
                <SelectItem key={filter.id} value={filter.id}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="break-inside-avoid rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white h-96"
            >
              <img
                src={event.image}
                alt={`Event ${event.id}`}
                className={`w-full object-cover h-full hover:scale-125 transition-all duration-300 ${
                  focus === null
                    ? ""
                    : focus === index
                    ? ""
                    : "blur-[2px] duration-150"
                }`}
                onMouseEnter={() => setFocus(index)}
                onMouseLeave={() => setFocus(null)}
              />
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No events found for the selected filters.
          </div>
        )}
      </div>
    </section>
  );
};

export default Infrastructure;
