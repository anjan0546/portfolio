const Leadership = () => {
  return (
    <section
      id="leadership"
      className="max-w-6xl mx-auto py-24 px-6"
    >
      <h2 className="text-5xl font-bold mb-12">
        Leadership & Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="
bg-white/5
border
border-blue-500/20
rounded-3xl
p-8
hover:scale-105
hover:border-blue-500
hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
transition-all
duration-300
">
          <h3 className="text-2xl font-bold mb-3">
            Operations Head
          </h3>

          <p className="text-blue-400 mb-4">
            Samudra Arts Council
          </p>

          <p className="text-gray-300">
            Managed club operations, coordinated
            events, and led execution teams to
            ensure successful event delivery.
          </p>
        </div>

        <div className="
bg-white/5
border
border-blue-500/20
rounded-3xl
p-8
hover:scale-105
hover:border-blue-500
hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]
transition-all
duration-300
">
          <h3 className="text-2xl font-bold mb-3">
            Campus Ambassador
          </h3>

          <p className="text-blue-400 mb-4">
            Air India
          </p>

          <p className="text-gray-300">
            Represented Air India among students,
            promoted initiatives, and engaged with
            campus communities.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Leadership;