import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">

          <h1 className="text-7xl md:text-8xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mallala Anjan Punith
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
  Full Stack Developer specializing in React,
Node.js, Flask, and AI Automation.

Building scalable applications,
intelligent workflows, and real-world products.
</p>

          <p className="text-2xl mt-4 text-gray-400">
            Full Stack Developer | AI Automation Builder
          </p>
          <div className="flex justify-center gap-6 mt-8 text-3xl">
  <a href="https://github.com/anjan0546">
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/mallala-anjan-punith-a3254b318/">
    <FaLinkedin />
  </a>

  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=anjan.punith15187@gmail.com" target="_blank" rel="noreferrer">
    <FaEnvelope />
  </a>
</div>

<div className="flex justify-center gap-12 mt-12">

  <div>
    <h2 className="text-3xl font-bold text-blue-400">
      5+
    </h2>
    <p>Projects</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-purple-400">
      2
    </h2>
    <p>Leadership Roles</p>
  </div>

  <div>
    <h2 className="text-3xl font-bold text-cyan-400">
      1000+
    </h2>
    <p>Hours Coding</p>
  </div>

</div>

        </div>
      </section>
    </motion.div>
  );
};

export default Hero;