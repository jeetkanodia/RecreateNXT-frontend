import React, { useState, useEffect } from "react";
import bg from "../assets/gradient.png";
import Logo from "../components/Logo";
import { BACKEND_URL } from "../assets/statics";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../store/userStore";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleRegister = () => {
    console.log(username, password, email);
    setLoading(true);
    fetch(`${BACKEND_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Registered successfully");
          setUser(data.user);
        }
      });
  };
  return (
    <div className="bg-grey-200 w-full min-h-screen flex flex-col justify-center items-center">
      <Toaster />
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="w-80 h-auto flex flex-col items-center rounded-3xl shadow-2xl"
      >
        <Logo />
        <div className="flex flex-col items-center justify-center text-white text-semibold text-xl">
          <div className="flex shadow-2xl flex-col mt-4 mb-4">
            <label htmlFor="username">username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-3xl mt-2 px-2 bg-[rgba(255,255,255,0.2)] shadow-2xl border border-white"
              type="text"
              id="username"
            />
          </div>
          <div className="flex shadow-2xl flex-col  mb-4">
            <label htmlFor="email">email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-3xl mt-2 px-2 bg-[rgba(255,255,255,0.2)] shadow-2xl border border-white"
              type="text"
              id="email"
            />
          </div>
          <div className="flex shadow-2xl flex-col mb-4">
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-3xl mt-2 px-2 bg-[rgba(255,255,255,0.2)] shadow-2xl border border-white"
              id="password"
            />
          </div>
          <div className="mt-2 text-base font-semibold">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-white font-semibold hover:underline"
            >
              Login
            </Link>{" "}
          </div>
          <Button
            onClick={handleRegister}
            variant="bordered"
            className="bg-white text-[#212121] font-semibold mt-2 mb-7"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
