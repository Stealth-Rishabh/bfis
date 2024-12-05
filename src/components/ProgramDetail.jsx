import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ProgramDetail = ({ subjects }) => {
  const { programId } = useParams();
  const navigate = useNavigate();

  const subject = subjects.find((s) => s.id === programId);

  if (!subject) {
    return <div>Program not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden"
        >
          {/* Header Section */}
          <div
            className="h-64 relative"
            style={{ backgroundColor: subject.bgColor }}
          >
            <img
              src={subject.image}
              alt={subject.title}
              className="w-full h-full object-cover opacity-75"
            />
            <button
              onClick={() => navigate("/program")}
              className="absolute top-4 left-4 bg-white/90 hover:bg-white px-4 py-2 rounded-lg shadow-md transition-all"
            >
              ← Back to Programs
            </button>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: subject.bgColor }}
            >
              {subject.title}
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-700">{subject.description}</p>
              </div>

              {subject.highlight && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Highlight</h3>
                  <p className="text-gray-700">{subject.highlight}</p>
                </div>
              )}

              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Detailed Information
                </h2>
                <div className="prose max-w-none">
                  {subject.fullDescription
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4 text-gray-700">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {subject.languages && (
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Available Languages
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {subject.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProgramDetail;
