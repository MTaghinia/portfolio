import { featuredProjects, otherProjects } from "../_misc/experiences";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="flex flex-col gap-y-10">
      {featuredProjects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
      {otherProjects.map((project) => (
        <ProjectCard project={project} key={project.title} />
      ))}
    </section>
  );
}
