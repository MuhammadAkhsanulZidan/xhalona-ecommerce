"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/xhalon.apk";
  }, []);

  const handleDownloadClick = () => {
    window.location.href = "/xhalon.apk";
  };

  return (
    <div className="relative bg-white flex flex-col items-center justify-center h-full font-sans">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff69b4"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,106.7C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center m-5">
        <Image
          src="/image_splash.png"
          alt="Download Image"
          width={200}
          height={200}
        />
        <h3 className="mt-4 text-l text-black">Terimakasih sudah mempercayai Xhalona 😊</h3>
        <h4 className="text-black mt-1 text-sm">
          Tekan <a className="text-pink-700 font-bold cursor-pointer" onClick={handleDownloadClick}>disini</a> apabila aplikasi tidak terunduh otomatis
        </h4>
        <h3 className="mt-3 text-black text-l">
          Saran & Pertanyaan? <a className="text-pink-700 font-bold" href="https://wa.me/628170067000">Hubungi Kami</a>
        </h3>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-screen overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block w-full h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff69b4"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,176C384,203,480,213,576,192C672,171,768,117,864,106.7C960,96,1056,128,1152,160C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
