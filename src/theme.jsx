import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#3b3b3b", // Dark background for dialog
          color: "white", // Text color inside dialog
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          color: "white", // Title text color
          textAlign: "center",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: "white", // Ensures dialog content text is visible
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white", // Label text color
          },
          "& label.Mui-focused": {
            color: "#03de44", // Label color when focused
          },
          "& .MuiOutlinedInput-root": {
            color: "white", // Input text color
            "& fieldset": {
              borderColor: "#03de44", // Green border for better visibility
            },
            "&:hover fieldset": {
              borderColor: "#03de44", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#03de44", // Border color when focused
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& label": {
            color: "white", // Label text color
          },
          "& label.Mui-focused": {
            color: "#03de44", // Label color when focused
          },
          "& .MuiOutlinedInput-root": {
            color: "white", // Input text color
            "& fieldset": {
              borderColor: "#03de44", // Green border
            },
            "&:hover fieldset": {
              borderColor: "#03de44",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#03de44",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white", // Label color
          "&.Mui-focused": {
            color: "#03de44", // Focused label color
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "white", // Selected text color
        },
        icon: {
          color: "white", // Dropdown arrow color
        },
        outlined: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#03de44", // Green border when focused
          },
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backgroundColor: "#3b3b3b", // Dark background for dropdown menu
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "white", // Text color in dropdown menu
          "&:hover": {
            backgroundColor: "#505050", // Slightly lighter hover effect
            color: "white", // Selected text color
            "&:hover": {
              backgroundColor: "#03de44", // Slightly darker green on hover
            },
          },
        },
      },
    },
  },
});

export default theme;
