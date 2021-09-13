import "../styles/Loader.css";
import { motion } from "framer-motion";

export default function Loader() {
 return (
  <motion.div
   initial={{ scale: 1.2 }}
   animate={{ scale: 1 }}
   className="loader-cont"
  >
   <div class="container-animation">
    <div class="part one"></div>
    <div class="part two"></div>
    <div class="part three"></div>
    <div class="part four"></div>
   </div>
  </motion.div>
 );
}
