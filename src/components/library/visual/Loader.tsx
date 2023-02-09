
import { motion } from "framer-motion";

const RickAndMorty = () => (
  <motion.div className="rick-and-morty">
    <h1>Loading...</h1>
    <motion.img 
      src="src/assets/Rick.png"
      alt="Rick and Morty"
      animate={{
        rotate: 360,
        x: 0
    }}
      transition={{ duration: 3, loop: Infinity }}
      style={{
        height: "170px",
        width: "170px",
        borderRadius: "2% 50%",
    }}
    />
  </motion.div>
);

export default RickAndMorty;
