import { Card, Typography, Box, CardContent } from "@mui/material";
import { specialtiesData } from "@/data/specialtiesData";
import { Specialty } from "@/app/types/Speciality";

export default function Specialities() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        padding: "32px",
        justifyContent: "center",
      }}
    >
      {specialtiesData.map((specialty: Specialty) => (
        <Card
          key={specialty.name}
          sx={{
            padding: 2,
            textAlign: "center",
            width: "calc(33.333% - 16px)",
            backgroundColor: "#fff",
            border: "1px solid #000",
            borderRadius: 2,
            boxShadow: "none",
            transition: "all 0.2s ease",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <CardContent sx={{ textAlign: "center" }}>
            <Box sx={{ mb: 2 }}>{specialty.icon}</Box>

            <Typography variant="h6">{specialty.name}</Typography>
            <Typography variant="body2">{specialty.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
