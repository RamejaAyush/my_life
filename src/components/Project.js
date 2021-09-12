import { motion } from "framer-motion";
import "../styles/Project.css";

export default function Project() {
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
    {/* ! pro 1 */}
    <div className="project-box">
     <div className="image-project">
      <img src="asdas" alt="" />
     </div>
     <div className="right">
      <div className="name-pro">
       <h1>Project 1</h1>
      </div>
      <div className="desc-pro">
       <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
        autem eligendi eaque beatae nulla magnam!
       </p>
      </div>
      <div className="btns-pro">
       <a href="asd">Source Code</a>
       <a href="asd">View Preview</a>
      </div>
     </div>
    </div>
    {/* pro 2 */}
    <div className="project-box">
     <div className="image-project">
      <img src="asdas" alt="" />
     </div>
     <div className="name-pro">
      <h1>Project 2</h1>
     </div>
     <div className="desc-pro">
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
       autem eligendi eaque beatae nulla magnam!
      </p>
     </div>
     <div className="btns-pro">
      <a href="asd">Source Code</a>
      <a href="asd">View Preview</a>
     </div>
    </div>
    {/* pro 3 */}
    <div className="project-box">
     <div className="image-project">
      <img src="asdas" alt="" />
     </div>
     <div className="name-pro">
      <h1>Project 3</h1>
     </div>
     <div className="desc-pro">
      <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis,
       autem eligendi eaque beatae nulla magnam!
      </p>
     </div>
     <div className="btns-pro">
      <a href="asd">Source Code</a>
      <a href="asd">View Preview</a>
     </div>
    </div>
   </div>
  </motion.div>
 );
}
