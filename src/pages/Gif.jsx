import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../assets/statics";
const Gif = () => {
  const [gif, setGif] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchGif = async () => {
      setLoading(true);
      setError(false);
      await fetch(`${BACKEND_URL}/api/gifs/random`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg5YWU5YWU3N2VhNGU4MmIzOTYzYWIiLCJpYXQiOjE3MDM3NjI3NjQsImV4cCI6MTcwMzg0OTE2NH0.fkg3hr3BQrqZCh1RHYLWlTPt4ZmGsaTrbmNCk8NyjXY`,
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
      <div className="flex bg-[#040208] flex-col items-center justify-center min-h-screen w-full">
        {error ? (
          <h1 className="text-white">Error...</h1>
        ) : (
          <div className="rounded-3xl">
            <img
              className="rounded-xl object-cover"
              src={gif}
              alt="yuvrajisgay"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Gif;
