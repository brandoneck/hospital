import { Typography, Card, Button, Box, CardContent } from "@mui/material";
import { specialtiesData } from "@/data/specialtiesData";

export default function SpecialtiesNames() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        py: 10,
      }}
    >
      {specialtiesData.slice(0, 6).map((specialty) => (
        <Card key={specialty.name} sx={{ width: 250 }}>
          <CardContent>
            <Typography variant="h6">{specialty.name}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
