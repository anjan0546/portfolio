import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold mb-12">
          About Me
        </h2>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-xl text-gray-300 leading-9">
            I'm Mallala Anjan Punith, a Computer Science
            student at BITS Pilani and NIAT passionate
            about Full Stack Development, AI Automation,
            and building products that solve real-world
            problems.

            <br /><br />

            I have built multiple deployed applications
            using React, Node.js, Flask, MongoDB,
            Gemini API, and cloud platforms like
            Vercel and Render.

            <br /><br />

            Apart from development, I serve as
            Operations Head of Samudra and
            Air India Campus Ambassador,
            where I actively contribute to leadership,
            event management, and student engagement.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;