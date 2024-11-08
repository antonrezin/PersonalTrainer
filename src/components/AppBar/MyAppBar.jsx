import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function MyAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "#03DE44" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon sx={{ fontSize: { xs: "2.5rem", sm: "3rem" } }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" },
              fontSize: { xs: "2rem", sm: "2rem" },
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            Personal Trainer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: { xs: "1rem", sm: "2rem" } }}>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
          <Box
            sx={{
              width: 250,
              paddingTop: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                color: "#000",
                fontSize: "2rem",
                fontWeight: "bold",
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "#000",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Customers
            </Button>
            <Button
              sx={{
                color: "#000",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Trainings
            </Button>
            <Button
              sx={{
                color: "#000",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Calendar
            </Button>
            <Button
              sx={{
                color: "#000",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              Chart
            </Button>
          </Box>
        </Drawer>
      </Box>
    </Box>
  );
}

export default MyAppBar;
