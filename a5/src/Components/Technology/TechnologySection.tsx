import { use } from "react";
import type { TechDataType } from "../../Type/Type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologySectionProps {
  techDataPromise: Promise<TechDataType[]>;
}

export default function TechnologySection({
  techDataPromise,
}: TechnologySectionProps) {
  const techData = use(techDataPromise);
  console.log(techData);
  return (
    <>
      <h2 className="text-4xl font-bold">
        Explore the{" "}
        <span className="bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p>Pick one technology per category to build your ideal stack.</p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4"
>
        {techData.map((technology) => (
          <TechnologyCard technology={technology} key={technology.id} />
        ))}
      </div>
    </>
  );
}
