import { use } from "react";
import type { DataType } from "../../Type/Type";
import TechnologyCard from "./TechnologyCard";

export interface TechnologySectionProps {
  techDataPromise: Promise<DataType[]>;
}

export default function TechnologySection({
  techDataPromise,
}: TechnologySectionProps) {
  const techData = use(techDataPromise);
  console.log(techData);
  return <>
  
  {
    techData.map(technology => <TechnologyCard technology={technology} key={technology.id}/>)
  }
  </>;
}
