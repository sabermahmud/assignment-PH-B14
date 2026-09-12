import type { TechDataType } from "../../Type/Type";
import YourStackCard from "./YourStackCard";

export interface YourStackProps {
  addedToStack: TechDataType[];
}

export default function YourStack({addedToStack}:YourStackProps) {
    console.log(addedToStack)
  return (
    <>
      <div className=" border-2 border-gray-200 p-4 rounded-2xl ">
        <h3 className="text-xl font-bold ">Your Stack</h3>
        <div>
            {
                addedToStack.map(stack=><YourStackCard stack={stack} key={stack.id}/>)
            }
        </div>
      </div>
    </>
  );
}
