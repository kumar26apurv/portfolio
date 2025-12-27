import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full"></div>

        {/* Education Items */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center mb-20 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
          

            {/* Content Card */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-white 
              bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]
              ${
                index % 2 === 0 ? "sm:ml-44" : "sm:mr-44"
              } ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Image + Text */}
              <div className="flex items-center space-x-6">
                {/* MAIN IMAGE (kept) */}
                <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-sm text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">
                Percentage: {edu.grade}
              </p>

              <p className="mt-3 text-gray-400">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
