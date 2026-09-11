import type { TechDataType } from "../../Type/Type";

export interface TechnologyCardProps {
  technology: TechDataType[];
}

export default function TechnologyCard({ technology }: TechnologyCardProps) {
  const {logo,  name, description, category, level, rating, badge } =
    technology;

  return (
    <>
      <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
        {/* Logo + Badge */}
        <div className="mb-5 flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 p-3 dark:bg-slate-800">
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

          <p className="line-clamp-3 text-sm leading-6 text-slate-900 dark:text-black">
            {description}
          </p>
        </div>

        {/* Bottom Information */}
        <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
          <div className="flex items-center justify-between">
            {/* Level */}
            <div>
              <p className="mb-1 text-xs text-slate-400">Difficulty</p>

              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {level}
              </p>
            </div>

            {/* Rating */}
            <div className="text-right">
              <p className="mb-1 text-xs text-slate-400">Rating</p>

              <div className="flex items-center gap-1">
                <span className="text-yellow-400">★</span>

                <span className="text-sm font-bold text-slate-800 dark:text-white">
                  {rating}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
