"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/amira.apk";
  }, []);

  const handleDownloadClick = () => {
    window.location.href = "/amira.apk";
  };

  return (
    <div className="relative bg-white flex flex-col items-center justify-center h-full font-sans">
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center m-5">
        <Image
          src="/logo-full-colored.png"
          alt="Download Image"
        />
        <h4 className="text-black mt-1 text-sm">
          Tekan <a className="text-pink-700 font-bold cursor-pointer" onClick={handleDownloadClick}>disini</a> apabila aplikasi tidak terunduh otomatis
        </h4>
      </div>
    </div>
  );
}
