import HeroImage from "/banner-stack.png";

export interface HeroProps {
  prop: string;
}

export default function Hero() {
  return (
    <>
      <section className="flex items-center justify-between max-w-7xl mx-auto p-4 ">
        {/* hero dialog */}
        <div className="w-full">
          <h1 className="text-[60px] font-extrabold">
            Build Your Ideal{" "}
            <span className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          {/* Cta btns */}
          <div className="mt-8 flex gap-6">
            <button className="bg-linear-65 from-[#F97316] to-[#EC4899] px-4 py-2 rounded-2xl">Explore Technologies</button>
            <button className="border-2 px-4 py-2 rounded-2xl">Learn More</button>
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
