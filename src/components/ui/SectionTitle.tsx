import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "primary.main",
          lineHeight: 1.1,

          cursor: "default",

          "&:hover + .underline": {
            width: 90,
  opacity: 1,
  transform: "scaleX(1.1)",
          },
        }}
      >
        {title}
      </Typography>

      <Box
        className="underline"
        sx={{
          width: 60,
          height: 3,
          backgroundColor: "primary.main",
          mx: "auto",
          mt: 1,
          borderRadius: 2,
          transformOrigin: "center",

          transition: "all 0.25s ease",
          opacity: 0.8,
        }}
      />
    </Box>
  );
}