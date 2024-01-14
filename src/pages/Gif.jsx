import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../assets/statics";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import useUserStore from "../store/userStore";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const Gif = () => {
  const navigate = useNavigate();
  const [gif, setGif] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const user = useUserStore((state) => state.user);

  const handleSubmit = async () => {
    if (!url) return;
    const token = user.token;
    await fetch(`${BACKEND_URL}/api/gifs/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url, gif }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          setError(true);
          return;
        } else {
          toast.success("Gif submitted successfully");
        }
      });
  };

  useEffect(() => {
    if (!user) {
      return navigate("/login");
    }
    const token = user.token;
    const fetchGif = async () => {
      setLoading(true);
      setError(false);
      await fetch(`${BACKEND_URL}/api/gifs/random`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            console.log(data.error);
            setError(true);
            return;
          }
          setGif(data.data[0].url);
          setLoading(false);
        });
    };
    fetchGif();
  }, []);

  if (loading) {
    return (
      <div className="flex bg-[#040208] flex-col items-center justify-center min-h-screen w-full">
        <h1 className="text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Toaster />
      <div className="flex bg-[#040208] flex-col items-center justify-center min-h-screen w-full">
        {error ? (
          <h1 className="text-white">Error...</h1>
        ) : (
          <>
            <div className="rounded-3xl">
              <img
                className="rounded-xl object-cover"
                src={gif}
                alt="yuvrajisgay"
              />
            </div>
            <div className="mt-2">
              <Input
                type="text"
                size="sm"
                // variant="underlined"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                label="url"
              />
              <Button
                onClick={handleSubmit}
                variant="bordered"
                className="bg-white text-[#212121] font-semibold mt-4 mb-7"
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Gif;
