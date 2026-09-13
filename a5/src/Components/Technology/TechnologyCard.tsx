import { useState, type Dispatch, type SetStateAction } from "react";
import type { TechDataType } from "../../Type/Type";
import { toast } from "react-toastify";

export interface TechnologyCardProps {
  technology: TechDataType;
  addedToStack: TechDataType[];
  setAddedToStack: Dispatch<SetStateAction<TechDataType[]>>;
}

export default function TechnologyCard({
  technology,
  addedToStack,
  setAddedToStack,
}: TechnologyCardProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false)

  const { logo, name, description, category, level, rating, badge } =
    technology;

  const handleAdd = () => {
    const alreadyAdded = addedToStack.some((item) => item.id === technology.id);

    if (alreadyAdded) return;

    setAddedToStack([...addedToStack, technology]);
    setIsSelected(true)
    toast.success(`"${name}" successfully Added to Your Stack. `)
  };

  return (
    <>
      <div className={`group flex h-full flex-col rounded-2xl border ${isSelected ? " border-2 border-blue-500" : "border-slate-200 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"} bg-white p-5 shadow-sm `}>
        {/* Logo + Badge */}
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl p-3">
            <img
              src={logo}
              alt={`${name} logo`}
              className="h-full w-full object-contain transition duration-300 group-hover:scale-110"
            />
          </div>

          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            {badge}
          </span>
        </div>

        {/* Name + Category */}
        <div className="mb-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold bg-linear-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent ">
              {name}
            </h2>

            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {category}
            </span>
          </div>

          <p className="line-clamp-3 text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>

        {/* Bottom Information */}
        <div className="mt-auto border-t border-gray-400 pt-4 ">
          <div className="flex items-center justify-between">
            {/* Level */}
            <div>
              <p className="mb-1 text-xs text-gray-500">Difficulty</p>

              <p className="text-sm font-semibold text-slate-500 ">
                {level}
              </p>
            </div>

            {/* Rating */}
            <div className="text-right">
              <p className="mb-1 text-xs text-gray-400">Rating</p>

              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>

                <span className="text-sm font-bold text-slate-800 ">
                  {rating}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Add Buttons */}
          <button
            onClick={handleAdd}
            disabled={isSelected}
            className={`bg-blue-600  px-4 py-2 rounded-2xl w-full text-white mt-6 ${isSelected? "bg-pink-600" : "bg-blue-600 hover:bg-purple-600" } `}
            
          >
            Add to Stack
          </button>
        </div>
      </div>
    </>
  );
}
