"use client";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SpecialtiesNames from "@/components/sections/SpecialtiesNames";
import { Container } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Container maxWidth="lg">
        <Stats />
        <SpecialtiesNames />
      </Container>
    </>
  );
}
