import { MdDelete } from "react-icons/md";
import type { TechDataType } from "../../Type/Type";
import type { Dispatch, SetStateAction } from "react";

export interface YourStackCardProps {
  stack: TechDataType;
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function YourStackCard({
  stack,
  addedToStack,
  setAddedToStack,
}: YourStackCardProps) {

  const handleDeleteOne = (stackedTech: TechDataType) => {
    const restStackedTechs = addedToStack.filter(
      (selectedTech) => selectedTech.name !== stackedTech.name
    );

    setAddedToStack(restStackedTechs);
  };

  return (
    <div className="flex gap-4 items-center p-4 border-b-2 border-gray-100">
      <img className="w-[50px]" src={stack.logo} alt={stack.name} />

      <div className="w-full">
        <h3 className="text-lg font-bold">{stack.name}</h3>
        <p className="text-xs">{stack.badge}</p>
      </div>

      <div>
        <button
          onClick={() => handleDeleteOne(stack)}
          className="text-red-400 text-2xl"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}