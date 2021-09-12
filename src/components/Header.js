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
   height: 0,
  },
  show: {
   opacity: 1,
   scale: 1,
   height: "100%",
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

 const linkAnim = {
  hidden: {
   opacity: 0,
   y: 25,
  },
  show: {
   opacity: 1,
   y: 0,
   transition: {
    duration: 0.25,
    delay: 1,
    ease: "easeOut",
   },
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
      <motion.a href="sad" variants={linkAnim} initial="hidden" animate="show">
       <VscGithubAlt title="Github" />
      </motion.a>
      <motion.a href="sad" variants={linkAnim} initial="hidden" animate="show">
       <FiTwitter title="Twitter" />
      </motion.a>
      <motion.a href="sad" variants={linkAnim} initial="hidden" animate="show">
       <RiLinkedinFill title="LinkedIn" />
      </motion.a>
     </motion.div>
    </motion.div>
   </motion.header>
  </>
 );
}
