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
            color: "#02c83d", // Label color when focused
          },
          "& .MuiOutlinedInput-root": {
            color: "white", // Input text color
            "& fieldset": {
              borderColor: "#02c83d", // Green border for better visibility
            },
            "&:hover fieldset": {
              borderColor: "#02c83d", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#02c83d", // Border color when focused
            },
          },
          // Style specifically for date type textfield
          "& input[type='date']": {
            backgroundColor: "#3b3b3b", // Background color for date picker
            color: "white", // Text color for date input
            "&::-webkit-calendar-picker-indicator": {
              filter: "invert(1)", // Invert the calendar icon to make it white
            },
            "&::-moz-calendar-picker-indicator": {
              filter: "invert(1)", // For Firefox
            },
            "&::-ms-calendar-picker-indicator": {
              filter: "invert(1)", // For Edge
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
            color: "#02c83d", // Label color when focused
          },
          "& .MuiOutlinedInput-root": {
            color: "white", // Input text color
            "& fieldset": {
              borderColor: "#02c83d", // Green border
            },
            "&:hover fieldset": {
              borderColor: "#02c83d",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#02c83d",
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
            color: "#02c83d", // Focused label color
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
            borderColor: "#02c83d", // Green border when focused
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
              backgroundColor: "#02c83d", // Slightly darker green on hover
            },
          },
        },
      },
    },
  },
});

export default theme;
