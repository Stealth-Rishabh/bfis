import { motion } from "framer-motion";
import WordPullUp from "../components/ui/word-pull-up";
import { useNavigate } from "react-router-dom";
import prePrimary from "@/assets/images/webp/pre-primary.webp";
import primary from "@/assets/images/webp/primary.webp";
import middle from "@/assets/images/webp/middle.webp";
import highschool from "@/assets/images/webp/highschool.webp";
import seniorSecondarySchool from "@/assets/images/webp/seniorSecondarySchool.webp";
import smart from "../assets/images/jpg/gallery10.jpg";

const sections = [
  {
    id: "pre-primary",
    title: "PRE-PRIMARY",
    subtitle: "Ages 3-5",
    image: prePrimary,
    description:
      "Our pre-primary program focuses on early childhood development through play-based learning, fostering curiosity and social skills in a nurturing environment.",
  },
  {
    id: "primary",
    title: "PRIMARY",
    subtitle: "Grades 1-5",
    image: primary,
    description:
      "The primary section builds a strong foundation in core subjects while encouraging creativity and critical thinking through interactive and engaging lessons.",
  },
  {
    id: "middle",
    title: "MIDDLE SCHOOL",
    subtitle: "Grades 6-8",
    image: middle,
    description:
      "Middle school prepares students for higher academic challenges, focusing on developing independent learning skills and exploring diverse subjects and extracurricular activities.",
  },
  {
    id: "high-school",
    title: "HIGH SCHOOL",
    subtitle: "Grades 9-10",
    image: highschool,
    description:
      "Our high school program offers a comprehensive curriculum that prepares students for advanced studies, with a focus on academic excellence and personal growth.",
  },
  {
    id: "senior-secondary",
    title: "SENIOR SECONDARY",
    subtitle: "Grades 11-12",
    image: seniorSecondarySchool,
    description:
      "The senior secondary program provides specialized streams and career guidance, equipping students with the knowledge and skills needed for higher education and future careers.",
  },
  {
    id: "smart-classes",
    title: "SMART CLASSES",
    subtitle: "Pre-Nursery to Class 12th",
    image: smart,
    description:
      "Our smart classes integrate cutting-edge technology across all grades, enhancing learning experiences with interactive digital content, virtual labs, and personalized learning tools.",
  },
];

export default function SchoolSection() {
  const navigate = useNavigate();

  return (
    <div className="w-full p-4 py-16">
      <WordPullUp
        words="Academics"
        className="text-dblue text-3xl md:text-5xl lg:text-6xl font-roboto font-bold text-center mb-4"
      />

      <motion.h3
        className="text-xl md:text-2xl font-roboto text-gray-600 text-center mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        Inspiring a Love of Learning from Pre-Primary to Senior Secondary
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            className="relative flex flex-col items-center p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Image Section */}
            <div className="w-full h-40 rounded-lg overflow-hidden mb-4">
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <h2 className="text-lg font-semibold text-dblue mb-2">
              {section.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">{section.subtitle}</p>
            <p className="text-gray-700 text-center text-sm">
              {section.description}
            </p>

            {/* Button */}
            <button
              className="mt-4 px-4 py-2 text-sm font-medium text-white bg-dblue rounded hover:bg-hgreen transition-colors"
              onClick={() => navigate(`/academics#${section.id}`)}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
