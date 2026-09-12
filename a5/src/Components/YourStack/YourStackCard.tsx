import { TbBrush } from "react-icons/tb";
import type { TechDataType } from "../../Type/Type";
import { MdDelete } from "react-icons/md";

export interface YourStackCardProps {
    stack: TechDataType;
}

export default function YourStackCard({ stack }: YourStackCardProps) {
    console.log(stack)
    return (<>
    <div className="flex gap-4 items-center p-4 border-b-2 border-gray-100">
        <img className="w-[50px]" src={stack.logo} alt="" />
        <div className="w-full">
            <h3 className="text-lg font-bold">{stack.name}</h3>
            <p className="text-xs">{stack.badge}</p>
        </div>
        <div>
            <MdDelete className="text-red-400 text-2xl" />
        </div>
    </div>

    
    
    </>)
}