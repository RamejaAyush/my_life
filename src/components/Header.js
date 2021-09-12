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

 const imgAnim = {
  hidden: {
   opacity: 0,
   scale: 1.1,
  },
  show: {
   opacity: 1,
   scale: 1,
   transition: { duration: 1 },
  },
 };

 const itemAnim = {
  hidden: {
   opacity: 0,
   y: 25,
  },
  show: {
   opacity: 1,
   y: 0,
   transition: { duration: 1 },
  },
 };

 return (
  <>
   <motion.header>
    <motion.div
     variants={headerAnim}
     initial="hidden"
     animate="show"
     className="pro-container"
    >
     <div className="image">
      <motion.img
       variants={imgAnim}
       initial="hidden"
       animate="show"
       src={profileImg}
       alt="ayush Rameja"
      />
     </div>
     <motion.div
      variants={itemAnim}
      initial="hidden"
      animate="show"
      className="name"
     >
      <h1>Ayush Rameja</h1>
     </motion.div>
     <motion.div
      variants={itemAnim}
      initial="hidden"
      animate="show"
      className="desc"
     >
      <p>Front End Developer</p>
     </motion.div>
     <motion.div
      variants={itemAnim}
      initial="hidden"
      animate="show"
      className="social-links"
     >
      <a href="sad">
       <VscGithubAlt title="Github" />
      </a>
      <a href="sad">
       <FiTwitter title="Twitter" />
      </a>
      <a href="sad">
       <RiLinkedinFill title="LinkedIn" />
      </a>
     </motion.div>
    </motion.div>
   </motion.header>
  </>
 );
}
