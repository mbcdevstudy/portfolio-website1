import {
  LuAward,
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer,
} from 'react-icons/lu';
import Header from '../general/Header';
import ResumeCard from './ResumeCard';
import { RiNextjsFill } from 'react-icons/ri';

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education section */}
        <div>
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Computer Science Degree"
              description="Bachelor of Science in Computer Science |
              UniverCity Name | Focused on algorithms, data structures,
              software engineering principles, and web technologies."
              date="May-2024-Aprile 2025"
            />
            <ResumeCard
              icon={LuBookOpen}
              role="Relevant Coursework"
              description="Web Development, Database System, Data Structures & Algorithms,
              Software Engineering, Computer Networks, Operating Systems, Cloud Compuring"
              date="jan-2024-Aprile 2024"
            />
            <ResumeCard
              icon={LuAward}
              role="Academic Achievements"
              description="Dean's List | Graduated Magna Cum Laude |
              Best Senior Project Award | President of Computer Science Club"
              date="March 2022 - Dec 2023"
            />
          </div>
        </div>
        {/* work experience */}
        <div>
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer"
              description="Crafting responsive, accessible interface with 
              modern frameworks like React & Next.js. Focus on performance, UX,
              and pixel-perfect implementation."
            />
            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Building scalable APIs, databases,
              and server infrastructure. Experienced with Node.js,
              Python, cloud services, and microservices architecture."
            />
            <ResumeCard
              icon={LuPackage}
              role="Fullstack Developer"
              description="End-to-end web application development, 
              Bridging frontend interfaces with backend system for cohesive,
              full-featured digital solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
