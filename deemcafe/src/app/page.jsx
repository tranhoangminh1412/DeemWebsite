'use client'

import Image from "next/image";
import bgImage from "@/assets/homeBackground.png";
import Navbar from "@/components/Navbar";
import HeroText from "@/components/HeroText";
import HeroContent from "@/components/HeroContent";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  router.push('/about')
  
  return (
    <></>
  );
}
