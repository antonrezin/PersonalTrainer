import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          fontWeight: "bold",
          fontFamily: "cursive",
          display: { xs: "flex", sm: "flex" },
          fontSize: { xs: "3rem", sm: "5rem" },
          color: "white",
        }}
      >
        Welcome to Personal Trainer App
      </Typography>
    </Box>
  );
}

export default Home;
