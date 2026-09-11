import { use } from "react";
import type { DataType } from "../../Type/Type";

export interface TechnologySectionProps {
  techDataPromise: Promise<DataType[]>;
}

export default function TechnologySection({
  techDataPromise,
}: TechnologySectionProps) {
  const techData = use(techDataPromise);
  console.log(techData)
  return;
}
