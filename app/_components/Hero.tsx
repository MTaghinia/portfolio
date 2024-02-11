export default function Hero() {
  return (
    <section className="flex h-screen w-full items-center justify-between gap-x-20">
      <div className="flex flex-col gap-y-4 text-6xl font-bold capitalize">
        <div>
          Doing it <span className="text-teal-800">&lt;clean /&gt;</span>
        </div>
        <div>
          Doing it <span className="italic text-teal-800">&lt;fast /&gt;</span>
        </div>
        <div>
          Doing it{" "}
          <span className="text-teal-800">&lt;pixel perfect /&gt;</span>
        </div>
      </div>
      <div className="size-[30vw] shrink-0 rounded-full bg-gradient-to-bl from-neutral-1 to-gray-800"></div>
    </section>
  );
}
