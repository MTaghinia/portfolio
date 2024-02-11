import { featuredProjects } from "../_misc/experiences";
import logoMap from "../_misc/logoMap";

function StackItem({ item }: { item: keyof typeof logoMap }) {
  const LogoSVG = logoMap[item];

  return (
    <div className="flex flex-col items-center gap-y-2 text-xs">
      <LogoSVG className="size-12" />
      {item}
    </div>
  );
}

export default function ProjectCard({
  project: { title, description, category, date, link, logo, stack },
}: {
  project: (typeof featuredProjects)[number];
}) {
  return (
    <div className="rounded-4xl bg-neutral-2 flex gap-x-4 p-4">
      <div className="flex flex-col gap-y-8 px-4">
        <div className="flex gap-x-4">
          <div className="size-[120px] shrink-0 rounded-full bg-black"></div>
          <div className="flex flex-col">
            <h3 className="text-primary-1 h-16 text-[40px] font-bold">
              {title}
            </h3>
            <p className="text-secondary-2 h-12 text-balance">
              {category} ({date})
            </p>
          </div>
        </div>
        <ul className="ml-[18px] list-disc">
          {description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="grid grid-cols-6 gap-6">
          {stack.map((item) => (
            <StackItem item={item} key={item} />
          ))}
        </div>
      </div>
      <div className="w-1/2 shrink-0 rounded-3xl"></div>
    </div>
  );
}
