"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/migor.apk";
  }, []);

  const handleDownloadClick = () => {
    window.location.href = "/migor.apk";
  };

  return (
    <div className="relative bg-white flex flex-col items-center justify-center h-full font-sans">
      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center m-5">
        <Image
          src="/logo-full-colered.png"
          alt="Download Image"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
