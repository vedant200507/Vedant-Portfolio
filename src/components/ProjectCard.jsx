import React from 'react';

const ProjectCard = ({ title, description, image, tech, demo, code }) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2">

      {/* Project Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-3">
          {title}
        </h3>

        <p className="text-gray-400 mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-dark-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-purple rounded-lg hover:opacity-80 transition"
          >
            View Demo
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-purple text-purple rounded-lg hover:bg-purple hover:text-white transition"
          >
            GitHub Repository
          </a>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;