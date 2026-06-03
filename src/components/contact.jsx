import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto py-24 px-6 text-center"
    >
      <h2 className="text-5xl font-bold mb-8">
        Contact Me
      </h2>

      <p className="text-gray-300 mb-10">
        I'm open to internships, collaborations,
        and exciting opportunities.
      </p>

      <div className="flex justify-center gap-8 text-4xl mt-10">
  <a
    href="https://github.com/anjan0546"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/mallala-anjan-punith-a3254b318/"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=anjan.punith15187@gmail.com"
    target="_blank"
  rel="noreferrer"
    className="hover:text-cyan-400 hover:scale-110 transition-all duration-300"
  >
    <FaEnvelope />
  </a>
</div>
    </section>
  );
};

export default Contact;