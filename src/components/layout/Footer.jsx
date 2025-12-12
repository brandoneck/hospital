import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { LOCAL_URLS } from "@/constants/urls";
import { ROUTES_MENU } from "@/constants/routes";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 3,
        mt: "auto",
        bgcolor: "primary.dark",
        color: "white",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* -------- IZQUIERDA -------- */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box display="flex" alignItems="stretch" gap={4}>
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

            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
              sx={{
                "& a": {
                  color: "grey.300",
                  textDecoration: "none",
                  transition: "0.2s",
                  "&:hover": {
                    color: "white",
                    textDecoration: "underline",
                  },
                },
              }}
            >
              {ROUTES_MENU.map((page) => (
                <Link key={page.path} href={page.path}>
                  {page.label}
                </Link>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* -------- DERECHA -------- */}
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            gap={1}
          >
            <Typography variant="subtitle1">Contacto</Typography>

            <Box display="flex" gap={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Link href="tel:+524490000000" underline="hover" color="inherit">
                <Typography variant="body2">Tel: (449) 000 0000</Typography>
              </Link>
            </Box>

            <Box display="flex" gap={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Link
                href="mailto:info@hospitalmarcos.com"
                underline="hover"
                color="inherit"
              >
                <Typography variant="body2">
                  info@hospitalmarcos.com
                </Typography>
              </Link>
            </Box>

            <Box display="flex" gap={1}>
              <IconButton
                href="#"
                sx={{ color: "white", p: 0.5 }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="#"
                sx={{ color: "white", p: 0.5 }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        textAlign="center"
        mt={4}
        sx={{ opacity: 0.7 }}
      >
        © {new Date().getFullYear()} Hospital San Marcos – Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
}
