import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import WordPullUp from "../components/ui/word-pull-up";
import pre_primary_boy from "../assets/images/webp/pre_primary_boy.webp";
import primary_boy from "../assets/images/webp/primary_boy.webp";
import middle_boy from "../assets/images/webp/middle_boy.webp";
import high_school_girl from "../assets/images/webp/high_school_girl.webp";
import senior_boy from "../assets/images/webp/senior_boy.webp";
import smart from "../assets/images/jpg/gallery10.jpg";

const sections = [
  {
    id: 1,
    title: "PRE-PRIMARY",
    subtitle: "Ages 3-5",
    color: "bg-[#FFB800]",
    image: pre_primary_boy,
    description:
      "Our pre-primary program focuses on early childhood development through play-based learning, fostering curiosity and social skills in a nurturing environment.",
  },
  {
    id: 2,
    title: "PRIMARY",
    subtitle: "Grades 1-5",
    color: "bg-[#26A69A]",
    image: primary_boy,
    description:
      "The primary section builds a strong foundation in core subjects while encouraging creativity and critical thinking through interactive and engaging lessons.",
  },
  {
    id: 3,
    title: "MIDDLE SCHOOL",
    subtitle: "Grades 6-8",
    color: "bg-[#4CAF50]",
    image: middle_boy,
    description:
      "Middle school prepares students for higher academic challenges, focusing on developing independent learning skills and exploring diverse subjects and extracurricular activities.",
  },
  {
    id: 4,
    title: "HIGH SCHOOL",
    subtitle: "Grades 9-10",
    color: "bg-[#2196F3]",
    image: high_school_girl,
    description:
      "Our high school program offers a comprehensive curriculum that prepares students for advanced studies, with a focus on academic excellence and personal growth.",
  },
  {
    id: 5,
    title: "SENIOR SECONDARY",
    subtitle: "Grades 11-12",
    color: "bg-[#9C27B0]",
    image: senior_boy,
    description:
      "The senior secondary program provides specialized streams and career guidance, equipping students with the knowledge and skills needed for higher education and future careers.",
  },
  {
    id: 6,
    title: "SMART CLASSES",
    subtitle: "Pre-Nursery to Class 12th",
    color: "bg-[#FF5722]",
    image: smart,
    description:
      "Our smart classes integrate cutting-edge technology across all grades, enhancing learning experiences with interactive digital content, virtual labs, and personalized learning tools.",
  },
];

export default function SchoolSection() {
  return (
    <div className="w-full p-4 py-16">
      <WordPullUp
        words="Academics"
        className="text-dblue text-4xl sm:text-5xl md:text-6xl font-roboto font-bold text-center mb-4"
      />

      <motion.h3
        className="text-xl md:text-2xl font-roboto text-gray-600 text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Inspiring a Love of Learning from Pre-Primary to Senior Secondary
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            className="perspective-1000 h-[400px] cursor-pointer group"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: window.innerWidth < 768 ? 0.7 : 1.5, // Faster on mobile
              delay: window.innerWidth < 768 ? 0 : index * 0.5, // No delay on mobile
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.4 }} // Re-triggerable animation
          >
            <div className="relative w-full h-full flip-card">
              <div
                className={`absolute w-full h-full backface-hidden ${section.color} rounded-lg p-4 flex flex-col items-center justify-center text-white shadow-lg`}
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-white">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-center mb-2">
                  {section.title}
                </h2>
                <p className="text-center text-sm">{section.subtitle}</p>
              </div>

              <div
                className={`absolute w-full h-full backface-hidden ${section.color} rounded-lg p-4 flex flex-col items-center justify-center text-white flip-card-back shadow-lg`}
              >
                <p className="text-center text-sm mb-4">
                  {section.description}
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-black hover:bg-white/90 transition-colors duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .flip-card {
          transform-style: preserve-3d;
          transition: transform 0.7s;
          position: relative;
          transform: rotateY(0deg);
        }
        .group:hover .flip-card {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
