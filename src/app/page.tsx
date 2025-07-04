"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   window.location.href = "/amira.apk";
  // }, []);

  const handleDownloadClickA = () => {
    window.location.href = "/amira.apk";
  };

  const handleDownloadClickL = () => {
    window.location.href = "/amira.apk";
  };

  return (
    <div className="relative bg-white flex flex-col items-center justify-center h-full font-sans">
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center m-5">
        <h3 className="text-md">AMIRA E-COMMERCE</h3>
        <h4 className="text-black mt-1 text-sm">
          Tekan <a className="text-pink-700 font-bold cursor-pointer" onClick={handleDownloadClickA}>disini</a>
        </h4>
        <div className="h-5"></div>
        <h3 className="text-md">LOGISTIK</h3>
        <h4 className="text-black mt-1 text-sm">
          Tekan <a className="text-pink-700 font-bold cursor-pointer" onClick={handleDownloadClickL}>disini</a>
        </h4>
      </div>
    </div>
  );
}
