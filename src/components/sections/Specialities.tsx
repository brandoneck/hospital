"use client";
import { Card, Typography, Box } from "@mui/material";
import { specialtiesData } from "@/data/specialtiesData";
import { Specialty } from "@/app/types/Speciality";

export default function Specialities() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        py: 10,
        margin: "0 auto",
      }}
    >
      {specialtiesData.map((specialty: Specialty, index: number) => (
        <Card
          key={index}
          sx={{
            width: "calc(33.333% - 16px)",
          }}
        >
          <Typography variant="h6">{specialty.name}</Typography>
          <Typography variant="body2">{specialty.description}</Typography>
        </Card>
      ))}
    </Box>
  );
}
