import { motion } from "framer-motion";
import "../styles/Project.css";

export default function Projects() {
 return (
  <>
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
    exit={{ opacity: 0, y: 25, transition: { duration: 1 } }}
   >
    <div className="project-container"></div>
   </motion.div>
  </>
 );
}
