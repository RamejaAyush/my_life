import { motion } from "framer-motion";
import Ind from "./Ind";
import "../styles/Project.css";
import Footer from "./Footer";
import projectData from "./Projects.json";

const Projects = () => {
 return (
  <motion.div
   initial={{ opacity: 0, y: 25 }}
   animate={{
    opacity: 1,
    y: 0,
    transition: {
     duration: 1,
     ease: "easeInOut",
    },
   }}
   exit={{ opacity: 0, y: 25 }}
  >
   <div className="project-container">
    {projectData.map((project) => {
     return (
      <Ind
       name={project.name}
       img_url={project.img_url}
       desc={project.desc}
       preview_url={project.preview_url}
       github_url={project.github_url}
      />
     );
    })}
   </div>
   <Footer />
  </motion.div>
 );
};

export default Projects;
