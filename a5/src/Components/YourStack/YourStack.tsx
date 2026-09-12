import type { Dispatch, SetStateAction } from "react";
import type { TechDataType } from "../../Type/Type";
import YourStackCard from "./YourStackCard";

export interface YourStackProps {
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function YourStack({addedToStack, setAddedToStack}:YourStackProps) {
    console.log(addedToStack)
  return (
    <>
      <div className=" border-2 border-gray-200 p-4 rounded-2xl mt-6">
        <h3 className="text-xl font-bold my-6">Your Stack</h3>
        <div className="">
            {
                addedToStack.map(stack=><YourStackCard stack={stack} key={stack.id} 
                  addedToStack={addedToStack}
                  setAddedToStack={setAddedToStack} />)
            }
        </div>
        <button className="text-red-500 text-center w-full p-2 border-2">Remove All</button>
      </div>
    </>
  );
}
