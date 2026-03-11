import Header from "../general/Header"
import ProjectCard from "./ProjectCard"


const ProjectSection = () => {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10
      overflow-hidden">
        <ProjectCard title="Modern Dashboard UI" imagePath="/images/p1.webp" description="A modern dashboard UI built with React and Tailwind CSS." />
        <ProjectCard title="Modern Education Website" imagePath="/images/p2.webp" description="A responsive education website built with Next.js and Tailwind CSS." />
        <ProjectCard title="Modern Landing Page" imagePath="/images/p3.webp" description="A modern landing page built with React and Tailwind CSS." />
        <ProjectCard title="Modern SAAS Website" imagePath="/images/p4.webp" description="A modern SAAS website built with React and Tailwind CSS." />
      </div>
    </section>
  )
}

export default ProjectSection