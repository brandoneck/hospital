import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <MyAppBar />
      <Typography variant="h4" sx={{ p: 2 }}>Welcome to Home Page</Typography>
    </>
  );
}