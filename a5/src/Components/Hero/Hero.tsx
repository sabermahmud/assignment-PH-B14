import HeroImage from "/banner-stack.png";

export interface HeroProps {
  prop: string;
}

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full mx-auto my-6 p-4 ">
        {/* hero dialog */}
        <div className="w-full">
          <h1 className="text-xl md:text-4xl lg:text-[60px] font-extrabold mb-4">
            Build Your Ideal{" "}
            <span className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          {/* Cta btns */}
          <div className="mt-8 flex gap-6">
            <button className="bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-2xl">Explore Technologies</button>
            <button className="border border-gray-400 px-4 py-2 rounded-2xl text-gray-500">Learn More</button>
          </div>
        </div>
        {/* hero img */}
        <div className="w-full">
          <img src={HeroImage} alt="" />
        </div>
      </section>
    </>
  );
}
