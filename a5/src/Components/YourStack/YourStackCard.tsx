import { MdDelete } from "react-icons/md";
import type { TechDataType } from "../../Type/Type";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

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
      (selectedTech) => selectedTech.id !== stackedTech.id,
    );

    setAddedToStack(restStackedTechs);
    toast.error(`${stackedTech.name} deleted successfully`);
  };

  return (
    <div className="flex gap-4 items-center p-4 border-b-2 border-gray-100">
      <img className="w-12.5" src={stack.logo} alt={stack.name} />

      <div className="w-full">
        <h3 className="text-lg font-bold">{stack.name}</h3>
        <p className="text-xs">{stack.category}</p>
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
