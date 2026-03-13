import { Specialty } from "@/app/types/Speciality";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HealingIcon from "@mui/icons-material/Healing";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FemaleIcon from "@mui/icons-material/Female";
import BiotechIcon from "@mui/icons-material/Biotech";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ScienceIcon from "@mui/icons-material/Science";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export const specialtiesData : Specialty[] = [
  {
    name: "Cardiología",
    description: "Diagnóstico y tratamiento de enfermedades del corazón.",
    icon: <FavoriteIcon fontSize="large" />
  },
  {
    name: "Pediatría",
    description: "Atención médica integral para niños.",
    icon: <ChildCareIcon fontSize="large" />
  },
  {
    name: "Ortopedia",
    description: "Tratamiento de huesos, articulaciones y sistema musculoesquelético.",
    icon: <AccessibilityNewIcon fontSize="large" />
  },
  {
    name: "Dermatología",
    description: "Cuidado y tratamiento de enfermedades de la piel.",
    icon: <HealingIcon fontSize="large" />
  },
  {
    name: "Neurología",
    description: "Diagnóstico y tratamiento de trastornos del sistema nervioso.",
    icon: <PsychologyIcon fontSize="large" />
  },
  {
    name: "Ginecología",
    description: "Atención médica relacionada con la salud reproductiva femenina.",
    icon: <FemaleIcon fontSize="large" />
  },
  {
    name: "Oncología",
    description: "Diagnóstico y tratamiento del cáncer.",
    icon: <BiotechIcon fontSize="large" />
  },
  {
    name: "Oftalmología",
    description: "Atención médica y quirúrgica para enfermedades de los ojos.",
    icon: <VisibilityIcon fontSize="large" />
  },
  {
    name: "Gastroenterología",
    description: "Tratamiento de enfermedades del sistema digestivo.",
    icon: <RestaurantIcon fontSize="large" />
  },
  {
    name: "Endocrinología",
    description: "Diagnóstico y tratamiento de trastornos hormonales.",
    icon: <ScienceIcon fontSize="large" />
  },
  {
    name: "Neumología",
    description: "Atención de enfermedades del sistema respiratorio.",
    icon: <AirIcon fontSize="large" />
  },
  {
    name: "Urología",
    description: "Tratamiento de enfermedades del sistema urinario y reproductor masculino.",
    icon: <WaterDropIcon fontSize="large" />
  }
];