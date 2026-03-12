"use client";
import { useRouter } from "next/navigation";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SpecialtiesNames from "@/components/sections/SpecialtiesNames";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <Hero />
      <Stats />
      <SpecialtiesNames />
    </>
  );
}
