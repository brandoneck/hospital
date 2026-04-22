import { Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/constants/routes";
import { LOCAL_URLS } from "@/constants/urls";
import { hospitalInfo } from "@/data/hospitalData";

export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f2f2f2",
        borderRadius: 2,
        p: 4,
        overflow: "hidden",
        mb: 8,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: 400,
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
        }}
      >
        <Image
          src={LOCAL_URLS.HOSPITAL_IMAGE}
          alt="Banner"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>

      <Box sx={{ flex: 1, mt: 4, textAlign: "center" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold" }}>
          {hospitalInfo.hero.title}
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          {hospitalInfo.hero.text}
        </Typography>

        <Link href={ROUTES.CONTACTO}>
          <Button variant="contained" color="primary" size="large">
            {hospitalInfo.hero.actionLabel}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}