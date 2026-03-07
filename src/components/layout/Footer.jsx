import { Box, Typography, Link, IconButton } from "@mui/material";
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 4,
          alignItems: "center",
        }}
      >
        {/* -------- IZQUIERDA -------- */}
        <Box>
          <Box display="flex" gap={4} flexWrap="wrap">
            <Box display="flex" alignItems="center" gap={2}>
              <Box
                component="img"
                src={LOCAL_URLS.LOGO_WHITE}
                alt="Logo"
                height={40}
              />
              <Box>
                <Typography variant="h6">Medical Center Branding Page (Demo)</Typography>
                <Typography variant="body2">
                  Especialistas de la salud.
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
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
        </Box>

        {/* -------- CENTRO -------- */}
        <Box display={{ xs: "none", md: "block" }} />

        {/* -------- DERECHA -------- */}
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            gap={1}
          >
            <Typography variant="subtitle1">Contacto</Typography>

            <Box display="flex" gap={1} alignItems="center">
              <PhoneIcon fontSize="small" />
              <Link href="tel:+524490000000" underline="hover" color="inherit">
                <Typography variant="body2">
                  Tel: (449) 000 0000
                </Typography>
              </Link>
            </Box>

            <Box display="flex" gap={1} alignItems="center">
              <EmailIcon fontSize="small" />
              <Link
              // TODO: Cambiar el correo por uno real
                // href="mailto:info@hospitalmarcos.com"
                href="#"
                underline="hover"
                color="inherit"
              >
                <Typography variant="body2">
                  info@medicalcenter...
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
        </Box>
      </Box>

      <Typography
        variant="body2"
        textAlign="center"
        mt={4}
        sx={{ opacity: 0.7 }}
      >
        © {new Date().getFullYear()} Medical Center Branding Page (Demo) – Todos los derechos
        reservados.
      </Typography>
    </Box>
  );
}
