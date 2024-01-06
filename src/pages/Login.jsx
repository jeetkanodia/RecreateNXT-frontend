import React, { useState, useEffect } from "react";
import bg from "../assets/gradient.png";
import Logo from "../components/Logo";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../assets/statics";
import useUserStore from "../store/userStore";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`${BACKEND_URL}/api/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Logged in successfully");
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
              className="rounded-3xl bg-[rgba(255,255,255,0.2)] shadow-2xl border border-white"
              type="text"
              id="username"
            />
          </div>
          <div className="flex shadow-2xl flex-col mb-4">
            <label htmlFor="password">password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="rounded-3xl bg-[rgba(255,255,255,0.2)] shadow-2xl border border-white"
              id="password"
            />
          </div>
          <div className="mt-2 text-base font-semibold">
            Don't have an account?{" "}
            <Link
              to={"/register"}
              className="text-white font-semibold hover:underline"
            >
              Register
            </Link>{" "}
          </div>
          <Button
            onClick={handleLogin}
            variant="bordered"
            className="bg-white text-[#212121] font-semibold mt-4 mb-7"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
