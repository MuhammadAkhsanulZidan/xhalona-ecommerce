"use client"; // Add this line at the top

import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/app-release.apk";
  }, []);
}
