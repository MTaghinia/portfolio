export default function About() {
  return (
    <section className="flex h-screen items-center gap-x-20">
      <div className="flex w-1/2 flex-col gap-y-4">
        <h2 className="text-4xl font-bold">About me</h2>
        <div>
          A detail-oriented web developer with 4+ years of experience in
          creating responsive and user-friendly websites, web apps, admin panels
          and dashboards spanning across diverse industries including
          cryptocurrency, betting, shopping, and farm management using renowned
          and widely used frameworks in the industry, React and Next.js.
          Possesses excellent communication and problem-solving skills, able to
          build robust working relationships and deliver high-quality solutions
          with precision and attention to detail. Proven track record of
          applying best SEsO techniques and performance optimization resulting
          in better discoverability and user experience. Eager to learn
          cutting-edge technologies and tools that improve workflow and enjoy
          challenges that lead to enhanced skillset.
        </div>
      </div>
      <div className="rounded-4xl flex h-96 w-1/2 flex-col items-center gap-y-4 border border-white px-20">
        <div className="size-40 rounded-full"></div>
        <div>Mahmoud Taghinia</div>
        <div>Web developer</div>
      </div>
    </section>
  );
}
