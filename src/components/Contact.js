import { motion } from "framer-motion";

export default function Contact() {
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
   <h1>Contact Section</h1>
  </motion.div>
 );
}
