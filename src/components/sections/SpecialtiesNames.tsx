import { Typography, Card, Button, Box, CardContent } from "@mui/material";
import { specialtiesData } from "@/data/specialtiesData";
import { ROUTES } from "@/constants/routes";
import { useInView } from "@/hooks/useInView";
import { useNavigation } from "@/hooks/useNavigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SpecialtiesNames() {
  const { navigate } = useNavigation();
  const router = useRouter();

  const [ref, isVisible] = useInView();


  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 6,
        py: 12,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease-out",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">Nuestras Especialidades</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          padding: "32px",
          justifyContent: "center",
        }}
      >
        {specialtiesData.slice(0, 6).map((specialty) => (
          <Card
            key={specialty.name}
            sx={{
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
            ´
            <Link
              href={`${ROUTES.ESPECIALIDADES}`}
              // TODO: redireccionar a la página de especialidad específica
              // href={`${ROUTES.ESPECIALIDADES}/${specialty.name.toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <CardContent sx={{ textAlign: "center", cursor: "pointer" }}>
                <Box sx={{ mb: 2 }}>{specialty.icon}</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#111",
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                  }}
                >
                  {specialty.name}
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
        <Button
          variant="outlined"
          sx={{
            borderColor: "#000",
            color: "#000",
            px: 4,
            py: 1.5,
            textTransform: "none",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "#f5f5f5",
            },
          }}
          onClick={() => {
            navigate(ROUTES.ESPECIALIDADES);
          }}
        >
          View All Specialties
        </Button>
      </Box>
    </Box>
  );
}
