import { Input } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import bg from "../assets/gradient.png";
import Logo from "../components/Logo";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../assets/statics";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import useUserStore from "../store/userStore";

const Profile = () => {
  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);
  const [submittedGifs, setSubmittedGifs] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    setSubmittedGifs(user?.submittedGifs);
  }, [user]);

  return (
    <div className="bg-[#212121] w-full  min-h-screen flex flex-col items-center pt-40">
      <div className="w-[70%]   mb-4">
        <div className="flex">
          <div className="rounded-full m-1 h-40 w-40">
            <img
              className="rounded-full object-cover"
              src="https://fueler.io/storage/users/avatar/yuvrajgarg_avatar_1689692475.png"
            />
          </div>
          <div className="ml-5 mt-6">
            <h1 className="text-5xl text-white font-semibold mt-3">
              {user?.username}
            </h1>
            <p className="text-2xl text-gray-500 mt-2">gay for a living</p>
          </div>
        </div>
        <div className="m-2 text-white text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          vel. Corrupti qui enim perspiciatis laborum tenetur et reprehenderit
          adipisci illum, at nisi quisquam, provident nihil blanditiis eius
          nobis nesciunt natus.
        </div>
      </div>

      <div className=" w-[70%]  text-xl ">
        <span className=" bg-gradient-to-r from-red-500 via-violet-600 to-cyan-400 bg-clip-text text-transparent">
          My Work
        </span>
      </div>
      <div className="flex  max-w-[70%] flex-wrap mt-2 text-white gap-8 mb-20">
        {submittedGifs?.map((gif, idx) => (
          <WorkCard url={gif.ytUrl} key={idx} />
        ))}
      </div>
    </div>
  );
};

const WorkCard = ({ url }) => {
  //convert youtube video url to id
  //const url = "https://www.youtube.com/watch?v=G2RpHt8NX0o";
  const video_id = url.split("v=")[1].split("&")[0];

  return (
    <Popup
      className="bg-black "
      modal={true}
      overlayStyle={{ background: "rgba(0,0,0,0.5" }}
      contentStyle={{
        background: "rgba(0,0,0,0.5)",
        width: "fit-content",
        border: "none",
      }}
      trigger={
        <div className="w-56 h-28 m-auto bg-transparent flex flex-col items-center rounded-xl">
          <img
            src={`https://img.youtube.com/vi/${video_id}/0.jpg`}
            alt=""
            className="w-56 h-28 object-cover rounded-xl"
          />{" "}
        </div>
      }
    >
      <div className=" flex justify-center items-center">
        <iframe
          className="rounded-2xl"
          width="700em"
          height="393.8em"
          src={"https://www.youtube.com/embed/" + video_id}
          title="YouTube video player"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </Popup>
  );
};

export default Profile;
