import { motion } from "framer-motion";
import Cricket from "../assets/icons/cricket.png";
import Swimming from "../assets/icons/splashPool.png";
import Football from "../assets/icons/football.png";
import rollerSkating from "../assets/icons/rollerSkating.png";
import Shooting from "../assets/icons/shooting.png";
import Basketball from "../assets/icons/basketball.png";
import HorseRiding from "../assets/icons/horseRiding.png";
import Yoga from "../assets/icons/yoga.png";
import Athlete from "../assets/icons/athletics.png";

const sports = [
  { name: "CRICKET", icon: Cricket },
  { name: "SWIMMING", icon: Swimming },
  { name: "FOOTBALL", icon: Football },
  { name: "ROLLER SKATING", icon: rollerSkating },
  { name: "SHOOTING", icon: Shooting },
  { name: "BASKETBALL", icon: Basketball },
  { name: "HORSE RIDING", icon: HorseRiding },
  { name: "YOGA", icon: Yoga },
  { name: "ATHLETE PROGRAMME", icon: Athlete },
];

const facilities = [
  "Cricket Field",
  "Football Ground",
  "Basketball Court",
  "Athletics Track (during season)",
  "Horse Riding Arena",
  "Roller Skating Rink",
  "Shooting Range",
  "Yoga Studio",
  "Splash Pool",
];

const SportsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Athletics</h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          From playing for fun to aspiring to play for the gold; all our
          students experience a broad range of sports in exceptional facilities.
          We are driven by values, not results. We know that if you get your
          culture right, the results will follow.
        </p>
      </motion.div>

      {/* Sports Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          List of Sports Offered
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center"
            >
              <img
                src={sport.icon}
                alt={sport.name}
                className="w-16 h-16 mb-3"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(48%) sepia(13%) saturate(1115%) hue-rotate(356deg) brightness(95%) contrast(83%)",
                }}
              />
              <p className="text-sm font-medium text-gray-700">{sport.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-3xl mx-auto mb-16 text-center"
      >
        <p className="text-lg text-gray-600 leading-relaxed">
          Our coaches and trainers are professional athletes and understand what
          it takes to perform at the highest level. They assist students at all
          levels to advance their abilities, as well as nurturing elite
          performers through focused training programmes – giving them every
          opportunity to excel. For students who wish to compete in their chosen
          sports, there are ample opportunities to represent Brookfield.
        </p>
      </motion.div>

      {/* Facilities Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Sporting Facilities on Campus
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-center text-gray-700">{facility}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SportsPage;
