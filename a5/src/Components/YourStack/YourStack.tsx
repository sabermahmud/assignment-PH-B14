import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechDataType } from "../../Type/Type";
import YourStackCard from "./YourStackCard";
import { toast } from "react-toastify";

export interface YourStackProps {
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;

}

export default function YourStack({
  addedToStack,
  setAddedToStack,
}: YourStackProps) {
  const [isAllDeleted, setIsAllDeleted] = useState<boolean>(false)
  const handleRemoveAll = () => {
    setAddedToStack([]);
    setIsAllDeleted(true)
    toast.error("All Stacks are deleted Successfully")
  
  };
  return (
    <>
      <div className=" border-2 border-gray-200 p-4 rounded-2xl mt-6">
        <h3 className="text-xl font-bold my-6">Your Stack</h3>
        <p>{addedToStack.length} Technology Selected</p>

        {addedToStack.length === 0 ? (
          <p className="p-4 border-2 border-slate-300 text-gray-500 rounded-2xl my-6">
            Your stack is empty.
          </p>
        ) : (
          <div>
            {addedToStack.map((stack) => (
              <YourStackCard
                stack={stack}
                key={stack.id}
                addedToStack={addedToStack}
                setAddedToStack={setAddedToStack}

              />
            ))}
          </div>
        )}
        <button
          onClick={handleRemoveAll}
          disabled={isAllDeleted}
          className="text-red-500 text-center w-full p-2 border-2"
        >
          Remove All
        </button>
      </div>
    </>
  );
}
