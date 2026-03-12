"use client";
import { Typography, Box, Button } from "@mui/material";
import { hospitalInfo } from "@/data/hospitalData";

export default function Stats() {
  return (
    <>
      <Box
            sx={{
              display: "flex",
              gap: 4,
              mt: 4,
              justifyContent: "center",
              marginTop: "120px",
              width: "100%",
              height: 80,
            }}
          >
            {hospitalInfo.hero.stats.map((stat, index) => (
              <Box key={index}>
                <Typography variant="subtitle1">{stat.value}</Typography>
              </Box>
            ))}
          </Box>
    </>
  );
}
