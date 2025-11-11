import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  
  const projectData = [
    {
      image: "/images/p1.jpg",
      title: "Crypto Portfolio Tracker",
      desc: "Finance, Analytics, Dashboard",
    },
    {
      image: "/images/p2.jpg",
      title: "AI-Powered Writing Assistant",
      desc: "Productivity, NLP, SaaS",
    },
    {
      image: "/images/p3.jpg",
      title: "E-Commerce Admin Panel",
      desc: "Retail, Management, UI/UX",
    },
    {
      image: "/images/p4.jpg",
      title: "Fitness Progress Visualizer",
      desc: "Health, Data Viz, Mobile App",
    },
  ];

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-4xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projectData.map((project, index) => (
          <ProjectsCard
            key={index}
            image={project.image}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
