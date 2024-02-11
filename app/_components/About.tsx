export default function About() {
  return (
    <section className="flex h-screen items-center gap-x-20">
      <div className="flex w-1/2 flex-col gap-y-4">
        <h2 className="text-4xl font-bold">About me</h2>
        <div>
          I am a freelance front-end developer who is passionate about coding
          and always eager to learn new technologies and tools that can enhance
          my skills and improve my workflow. I have more than four years of
          experience in creating responsive and user-friendly websites using
          renowned and widely used frameworks in the industry, React and
          Next.js. I enjoy working on challenging projects and collaborating
          with other developers to deliver high-quality solutions that meet the
          client's needs and expectations
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
