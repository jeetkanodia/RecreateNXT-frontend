
import { useEffect , useRef } from "react";
import { motion } from "framer-motion";
import MainHome from "./MainHome";

const Background = () => {
  const targetRef = useRef(null);
    useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!targetRef.current) return;
      var { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return() => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.section
      ref={targetRef}
      className="relative w-full  min-h-screen  before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_10px)_var(--y,_10px),#7b61ff_0%,white_30%)] before:opacity-30"
    >
      <MainHome />
    </motion.section>
  );
};

export default Background;