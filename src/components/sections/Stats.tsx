"use client";
import { Typography, Box } from "@mui/material";
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
            flex: "1 1 220px",
            minHeight: 180,

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            textAlign: "center",

            borderRadius: 4,
            backgroundColor: "background.paper",

            border: "1px solid",
            borderColor: "divider",

            transition: "all 0.25s ease",

            "&:hover": {
              transform: "translateY(-4px)",
              borderColor: "primary.main",
              boxShadow: 2,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 42,
              mb: 1,
            }}
          >
            {stat.icon}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "primary.main",
              lineHeight: 1.1,
            }}
          >
            {stat.value}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              mt: 1,
              color: "text.secondary",
            }}
          >
            {stat.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
