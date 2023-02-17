import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CAnimationView = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default CAnimationView;
