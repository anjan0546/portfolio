const Navbar = () => {
  return (
    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-md
      bg-black/20
      border-b
      border-white/10
    ">
      <div className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        px-6
        py-4
      ">
        <a
  href="#"
  className="
  text-2xl
  font-bold
  bg-gradient-to-r
  from-cyan-400
  to-purple-500
  bg-clip-text
  text-transparent
  "
>
  Anjan.
</a>

        <div className="flex gap-8 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#leadership" className="hover:text-white">Leadership</a>
          <a href="#contact" className="hover:text-white">Contact</a>
            <a
    href="/resume.pdf"
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-700"
  >
    Resume
  </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;