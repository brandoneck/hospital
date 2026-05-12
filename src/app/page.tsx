"use client";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SpecialtiesNames from "@/components/sections/SpecialtiesNames";
import { Container, Box } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Stats />
        </Container>
      </Box>

      <Box sx={{ py: 12, backgroundColor: "custom.gray3" }}>
        <Container maxWidth="lg">
          <SpecialtiesNames />
        </Container>
      </Box>
    </>
  );
}
