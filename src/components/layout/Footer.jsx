import { Box, Grid, Typography, Link } from "@mui/material";
import { LOCAL_URLS } from "@/constants/urls";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 3,
        mt: "auto",
        bgcolor: "#020659",
        color: "white",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={2}>
            <Box
              component="img"
              src={LOCAL_URLS.LOGO_WHITE}
              alt="Logo"
              height={40}
            />
            <Box>
              <Typography variant="h6">Hospital San Marcos</Typography>
              <Typography variant="body2">
                Especialistas de la salud.
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={6} md={4}>
          <Box display="flex" alignItems="center" gap={2}>

            {/* <Typography variant="subtitle1">Enlaces</Typography> */}
            <Link href="#" color="inherit" underline="hover">
              Inicio
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Dashboard
            </Link>
            <br />
            <Link href="#" color="inherit" underline="hover">
              Especialistas
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} md={4}>
          <Typography variant="subtitle1">Contacto</Typography>
          <Link href="#" color="inherit" underline="hover">
            Telefono
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Facebook
          </Link>
          <br />
          <Link href="#" color="inherit" underline="hover">
            Instagram
          </Link>
          <br />
        </Grid>
      </Grid>

      <Typography variant="body2" textAlign="center" mt={3}>
        © {new Date().getFullYear()} Mi Proyecto
      </Typography>
    </Box>
  );
}
