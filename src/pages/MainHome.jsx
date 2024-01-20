import React from "react";
import jeet from "../assets/jeet.png";
import yuvraj from "../assets/yuvraj.png";
import varun from "../assets/varun.png";
const MainHome = () => {
  return (
    <div className="w-full min-h-screen tracking-wide bg-white">
      <div className="flex justify-between">
        <div>
          <div className="text-[#7300FF] tracking-wide pt-28 pl-9 font-extrabold text-9xl gothfont">
            pxl.vzn
          </div>
          <div className="flex pl-7 mt-12 m-8">
            <HiSpeakerphone />{" "}
            <span className="text-[#575757] pl-2 font-bold text-xl ">
              \ pixel-vision \
            </span>
          </div>
        </div>
        <div>
          {/* make 3 images circles */}
          <div className="flex mt-20 pt-28 mr-80  w-full justify-center">
            <div className="w-20 border-2 hover:rotate-6 hover:scale-110 transition-all z-1 border-blue-600 mr-[-30px] h-20 bg-blue-500 rounded-full">
              <img src={jeet} alt="jeet" className="rounded-full" />
            </div>
            <div className="w-20 border-2 hover:rotate-6 hover:scale-110 border-blue-600 mt-14 transition-all h-20 z-2 bg-black rounded-full">
              <img src={varun} alt="varun" className="rounded-full" />
            </div>
            <div className="w-20 border-2 hover:rotate-6 hover:scale-110 border-blue-600 mr-96 transition-all h-20 z-3 ml-[-30px] bg-red-600 rounded-full">
              <img src={yuvraj} alt="yuvraj" className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#575757] m-8 font-medium text-md">
        <div className="mb-2">1. pxlvzn is a community of artists.</div>
        <div className="mb-2">2. we love every pixel on our screens.</div>
        <div className="mb-2">
          3. let's connect at <span className="font-bold">work@pxlvzn.in</span>
        </div>
      </div>
      <div className="flex gap-2 m-2 pl-8 text-[#575757] font-medium text-xl">
        <div className=" bg-[#7300FF] p-4 rounded-2xl text-white ">
          community
        </div>
        <div className="rounded-2xl p-4 border border-[#575757]">tools</div>
        <div className="rounded-2xl p-4 border border-[#575757]">library</div>
        <div className="rounded-2xl p-4 border border-[#575757]">shop</div>
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
      height="1.8em"
      width="1.8em"
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
