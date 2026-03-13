"use client";
import { Typography, Box, Button } from "@mui/material";
import { hospitalInfo } from "@/data/hospitalData";
import { useInView } from "@/hooks/useInView";

export default function Stats() {
  const [ref, isVisible] = useInView();

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        mt: 4,
        width: "100%",
        padding: "32px",
        py: 4,
        pb: 12,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease-out",
      }}
    >
      {hospitalInfo.hero.stats.map((stat, index) => (
        <Box
          key={index}
          sx={{
            flex: "1 1 200px",
            textAlign: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ color: "primary.main", fontWeight: "bold" }}
          >
            {stat.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
