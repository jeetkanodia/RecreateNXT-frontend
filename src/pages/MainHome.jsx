import React from "react";
import jeet from "../assets/jeet.png";
import yuvraj from "../assets/yuvraj.png";
import varun from "../assets/varun.png";
import line from "../assets/line.png";
import arrow from "../assets/arrow.png";
import { Link } from "react-router-dom";
const MainHome = () => {
  return (
    <div className="w-full min-h-screen tracking-wide">
      <div className="flex justify-between">
        <div>
          <div className="text-[#7300FF] tracking-wide pt-32 pl-16 font-extrabold text-9xl text-[11rem] gothfont">
            pxl.vzn
          </div>
          <div className="flex pl-7 mt-20 m-8">
            <HiSpeakerphone />{" "}
            <span className="text-[#575757] pl-2 mt-1 font-bold text-3xl">
              \ pixel-vision \
            </span>
          </div>
        </div>
        <div>
          {/* make 3 images circles */}
          <div className="flex mt-20 pt-28 mr-80 mb-[-80px] w-full justify-center">
            <div className="w-36 border-2 hover:rotate-6 hover:scale-110 rotate-12 transition-all z-0 border-[#7300FF] mr-[-50px] h-36 bg-blue-500 rounded-full">
              <Link to={"https://twitter.com/jeet_kanodia"} target="_blank">
                <img src={jeet} alt="jeet" className="rounded-full" />
              </Link>
            </div>
            <div className="w-36 border-2 hover:rotate-6 hover:scale-110 border-[#7300FF] mt-24 transition-all h-36 z-10 bg-black rounded-full">
              <Link to={"https://twitter.com/Varun_Gotmare"} target="_blank">
                <img src={varun} alt="varun" className="rounded-full" />
              </Link>
            </div>
            <div className="w-36 border-2 hover:rotate-6 hover:scale-110 border-[#7300FF] mr-96 transition-all h-36 z-20 mt-2 ml-[-50px] bg-red-600 rounded-full">
              <Link to={"https://twitter.com/yuvrajgargg"} target="_blank">
                <img src={yuvraj} alt="yuvraj" className="rounded-full" />
              </Link>
            </div>
          </div>
          <div className="mb-[-50px] mr-4">
            <div className="w-20 ml-36 ">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="gochifont text-[#7300FF] text-2xl">
              crafted by these guys
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#575757] pl-8 mx-8 m-2 font-medium text-3xl">
        <div className="mb-2 ml-1">1. pxlvzn is a community of artists.</div>
        <div className="mb-2">2. we love every pixel on our screens.</div>
        <div className="mb-2">
          3. let's connect at <span className="font-bold">work@pxlvzn.in</span>
          <div className="w-64 ml-72 ">
            <img src={line} alt="linepng" />
          </div>
        </div>
      </div>
      <div className="flex gap-4 m-6 my-20 pl-8 text-[#575757] font-light  text-3xl">
        <Link to={"https://discord.gg/SDVbHsABB7"} target={"_blank"}>
          <div className=" bg-[#7300FF] p-4  rounded-2xl text-white hover:scale-110 transition-all ">
            community
          </div>
        </Link>
        <div className="rounded-2xl p-4 border-2 flex flex-col items-center content-center px-10 border-[#575757]">
          <div className="mb-1">tools</div>
          <div className="text-[0.8rem] text-white gochifont h-[1.9rem] bg-[#7300FF] rounded-xl px-2  mb-[-40px]">
            (work in progress)
          </div>
        </div>
        <div className="rounded-2xl p-4 border-2 flex flex-col items-center content-center px-10 border-[#575757]">
          <div className="mb-1">library</div>
          <div className="text-[0.8rem] text-white gochifont h-[1.9rem] bg-[#7300FF] rounded-xl px-2  mb-[-50px]">
            (work in progress)
          </div>
        </div>
        <div className="rounded-2xl p-4 border-2 flex flex-col items-center content-center px-10 border-[#575757]">
          <div className="mb-1">shop</div>
          <div className="text-[0.8rem] text-white gochifont h-[1.9rem] bg-[#7300FF] rounded-xl px-2  mb-[-50px]">
            (work in progress)
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;

function HiSpeakerphone(props) {
  return (
    <svg
      stroke="currentColor"
      fill="#7300FF"
      strokeWidth={0}
      viewBox="0 0 20 20"
      height="2.7em"
      width="2.7em"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
        clipRule="evenodd"
      />
    </svg>
  );
}
