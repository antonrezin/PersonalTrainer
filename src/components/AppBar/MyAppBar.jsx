import {
  AppBar,
  Box,
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
import { NavLink } from "react-router-dom";
import "./MyAppBar.css";

export default function MyAppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerItems = [
    {
      text: "Home",
      icon: <HomeIcon sx={{ fontSize: "2.5rem" }} />,
      path: "/",
    },
    {
      text: "Customers",
      icon: <GroupsIcon sx={{ fontSize: "2.5rem" }} />,
      path: "/customers",
    },
    {
      text: "Trainigs",
      icon: <FitnessCenterIcon sx={{ fontSize: "2.5rem" }} />,
      path: "/trainings",
    },
    {
      text: "Calendar",
      icon: <TodayIcon sx={{ fontSize: "2.5rem" }} />,
      path: "/calendar",
    },
    {
      text: "Chart",
      icon: <BarChartIcon sx={{ fontSize: "2.5rem" }} />,
      path: "/chart",
    },
  ];

  return (
    <Box sx={{ display: "flex", margin: "50px" }}>
      {/* App bar for menu (drawer) button and title */}
      <AppBar component="nav" sx={{ backgroundColor: "#02c83d" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon sx={{ fontSize: { xs: "2.5rem", sm: "2,5rem" } }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: "cursive",
              display: { xs: "flex", sm: "flex" },
              fontSize: { xs: "2rem", sm: "2rem" },
              fontWeight: "bold",
              justifyContent: "center",
              marginRight: 7,
            }}
          >
            Personal Trainer
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#3b3b3b" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {drawerItems.map(({ text, icon, path }) => (
              <ListItem key={text} disablePadding>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `drawer-link ${isActive ? "active" : ""}`
                  }
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "100%",
                  }}
                >
                  <ListItemButton
                    sx={{
                      "&.active": {
                        backgroundColor: "#02c83d",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ fontSize: "2rem" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{
                        fontFamily: "cursive",
                        fontSize: "2rem",
                        color: "white",
                      }}
                    />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
