import { Input } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import bg from "../assets/gradient.png";
import Logo from "../components/Logo";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../assets/statics";
import useUserStore from "../store/userStore";
const Profile = () => {
  const navigate = useNavigate();

  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="bg-[#212121] w-full text-white min-h-screen flex flex-col items-center pt-40">
      <div className="w-[70%]   mb-4">
        <div className="flex">
          <div className="rounded-full m-1 h-40 w-40">
            <img
              className="rounded-full object-cover"
              src="https://fueler.io/storage/users/avatar/yuvrajgarg_avatar_1689692475.png"
            />
          </div>
          <div className="ml-5 mt-6">
            <h1 className="text-5xl font-semibold mt-3">Jeet kanodia</h1>
            <p className="text-2xl mt-2">gay for a living</p>
          </div>
        </div>
        <div className="m-2 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          dolore ipsa voluptates accusamus similique quasi dignissimos natus
          repellat odit aut? Distinctio alias quae fuga nihil exercitationem,
          cum ab eligendi nesciunt?
        </div>
      </div>

      <div className=" w-[70%] ">my work</div>
      <div className="flex flex-wrap mt-2">
        <div className="">my work</div>
        <div className="  ">my work</div>
        <div className=" ">my work</div>
      </div>
    </div>
  );
};

export default Profile;
