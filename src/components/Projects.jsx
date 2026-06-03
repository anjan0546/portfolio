import resumex from "../assets/projects/ResumeX.png";
import rolefinder from "../assets/projects/RoleFinder.png";
import automation from "../assets/projects/automation.png";
import taskmanager from "../assets/projects/taskmanager.png";

const projects = [
  {
    title: "ResumeX",
    image: resumex,
    description:
      "AI-powered resume analyzer with ATS scoring, skill detection, PDF parsing, and personalized feedback.",
    tech: ["React", "Vite", "JavaScript", "PDF Parsing"],
    github: "https://github.com/anjan0546/ResumeX",
    live: "https://resume-x-peach.vercel.app/",
  },
  {
    title: "RoleFinder",
    image: rolefinder,
    description:
      "Matches user skills to suitable career paths using custom scoring algorithms.",
    tech: ["Node.js", "Express.js", "MongoDB", "React"],
    github: "https://github.com/anjan0546/RoleFinder-app",
    live: "https://meek-cat-705d78.netlify.app/",
  },
  {
    title: "AI Job Automation",
    image: automation,
    description:
      "Automated job discovery system using Gemini API, RSS feeds, and n8n workflows.",
    tech: ["n8n", "Gemini API", "Google Sheets", "RSS Feeds"],
    github: null,
    live: "https://lnkd.in/gNxYgnRv",
  },
  {
    title: "MERN Task Manager",
    image: taskmanager,
    description:
      "Full-stack task management platform with JWT authentication and protected routes.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/anjan0546/mern-task-manager",
    live: "https://mern-task-manager-ozs9.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              bg-white/5
              border
              border-blue-500/20
              rounded-3xl
              p-8
              backdrop-blur-md
              hover:scale-105
              hover:border-blue-500
              hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
              transition-all
              duration-300
            "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
                w-full
                h-56
                object-cover
                rounded-2xl
                mb-6
                border
                border-white/10
              "
            />

            {/* Featured Badge */}
            {project.title === "ResumeX" && (
              <span
                className="
                  bg-blue-600
                  px-3
                  py-1
                  rounded-full
                  text-sm
                  inline-block
                  mb-4
                "
              >
                ⭐ Featured
              </span>
            )}

            <h3 className="text-3xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mt-4 mb-6">
              {project.tech.map((item, index) => (
                <span
                  key={index}
                  className="
                    px-3
                    py-1
                    bg-blue-500/20
                    rounded-full
                    text-sm
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  px-4
                  py-2
                  bg-blue-600
                  hover:bg-blue-700
                  transition
                  rounded-xl
                "
              >
                GitHub
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="
                  px-4
                  py-2
                  border
                  rounded-xl
                  hover:bg-white/10
                  transition
                "
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;