import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import TodayIcon from "@mui/icons-material/Today";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useState } from "react";

function MyAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerItems = [
    { text: "Home", icon: <HomeIcon sx={{ fontSize: "2.5rem" }} /> },
    { text: "Customers", icon: <GroupsIcon sx={{ fontSize: "2.5rem" }} /> },
    {
      text: "Trainigs",
      icon: <FitnessCenterIcon sx={{ fontSize: "2.5rem" }} />,
    },
    { text: "Calendar", icon: <TodayIcon sx={{ fontSize: "2.5rem" }} /> },
    { text: "Chart", icon: <BarChartIcon sx={{ fontSize: "2.5rem" }} /> },
  ];

  return (
    <Box sx={{ display: "flex", margin: "50px" }}>
      {/* App bar for menu (drawer) button and title */}
      <AppBar component="nav" sx={{ backgroundColor: "#03DE44" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
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

      {/* Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {drawerItems.map(({ text, icon }) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ fontSize: "2rem" }}>{icon}</ListItemIcon>
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default MyAppBar;
