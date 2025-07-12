"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   window.location.href = "/amira.apk";
  // }, []);

  const handleDownloadClickA = () => {
    window.location.href = "/goods.apk";
  };

  const handleDownloadClickL = () => {
    window.location.href = "/logistik.apk";
  };

  return (
    <div className="relative bg-white flex flex-col items-center justify-center h-full font-sans">
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center m-5">
        <h3 className="text-md text-black">E-COMMERCE</h3>
        <h4 className="text-black mt-1 text-sm">
          Tekan <button className="bg-green-500 border-none text-white font-bold cursor-pointer" onClick={handleDownloadClickA}>disini</button>
        </h4>
        <div className="h-5"></div>
        <h3 className="text-md text-black">LOGISTIK</h3>
        <h4 className="text-black mt-1 text-sm">
          Tekan <button className="bg-blue-500 border-none text-white font-bold cursor-pointer" onClick={handleDownloadClickL}>disini</button>
        </h4>
      </div>
    </div>
  );
}
