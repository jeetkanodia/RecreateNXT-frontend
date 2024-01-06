import React from "react";
import { Button } from "@nextui-org/button";
import bg from "../assets/gradient.png";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
const Home = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
      <motion.div
        // initial={{ opacity: 0.1 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        // exit={{ opacity: 0 }}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen bg-gradient-to-t from-[#2A2541] from-0% to-[#000000] to-90% h-auto w-full bg-black flex flex-col justify-center items-center"
      >
        <h1 className="text-white  text-6xl text-center mb-5 font-semibold">
          Learn by Recreating.
        </h1>
        <p className="text-[rgb(255,255,255,0.7)] mx-2 text-center text-2xl mb-5">
          Recreate your next animation task
        </p>
        <Button
          className="bg-[#965CFF] hover:bg-[#6B33CC] h-12 w-22 self-center"
          variant="fade"
        >
          <Link to="/generate">
            <div className="flex items-center mx-3">
              <span className="text-white text-xl font-medium mr-2">
                Generate
              </span>{" "}
              <HiArrowRight className="text-white " />
            </div>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Home;

function HiArrowRight(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 20 20"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}
