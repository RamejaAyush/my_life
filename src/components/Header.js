import "../styles/Header.css";
import profileImg from "../media/profile.jpg";
import { VscGithubAlt } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Header() {
 const headerAnim = {
  hidden: {
   opacity: 0,
   y: 50,
  },
  show: {
   opacity: 1,
   y: 0,
   transition: { duration: 1, ease: "easeOut" },
  },
 };

 return (
  <motion.header>
   <motion.div
    variants={headerAnim}
    initial="hidden"
    animate="show"
    className="pro-container"
   >
    <div className="image">
     <img src={profileImg} alt="ayush Rameja" />
    </div>
    <div className="name">
     <h1>Ayush Rameja</h1>
    </div>
    <div className="desc">
     <p>Front End Developer</p>
    </div>
    <div className="social-links">
     <a href="sad">
      <VscGithubAlt title="Github" />
     </a>
     <a href="sad">
      <FiTwitter title="Twitter" />
     </a>
     <a href="sad">
      <RiLinkedinFill title="LinkedIn" />
     </a>
    </div>
   </motion.div>
  </motion.header>
 );
}
