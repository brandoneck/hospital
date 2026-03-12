"use client";
import { useRouter } from "next/navigation";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Hero />
      <Stats />
    </>
  );
}
