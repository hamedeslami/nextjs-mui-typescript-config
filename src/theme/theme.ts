"use client";

import { createTheme } from "@mui/material/styles";

// A custom theme for your app
const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      light: "#4A90E2",
      main: "#0164BC",
      dark: "#003B75",
      contrastText: "#FFFFFF"
    },
    secondary: {
      light: "#FFD54F",
      main: "#FFC107",
      dark: "#FFA000",
      contrastText: "#1C252E"
    },
    info: {
      light: "#64B5F6",
      main: "#2196F3",
      dark: "#1565C0",
      contrastText: "#FFFFFF"
    },
    success: {
      light: "#81C784",
      main: "#4CAF50",
      dark: "#388E3C",
      contrastText: "#FFFFFF"
    },
    warning: {
      light: "#FFE082",
      main: "#FFB300",
      dark: "#FF8F00",
      contrastText: "#1C252E"
    },
    error: {
      light: "#E57373",
      main: "#F44336",
      dark: "#D32F2F",
      contrastText: "#FFFFFF"
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121"
    },
    common: {
      black: "#000000",
      white: "#FFFFFF"
    },
    background: {
      default: "#F4F6F8"
    }
  },
  typography: {
    fontFamily: "var(--font-IRANSansX)",
    subtitle1: {
      fontSize: ".75rem",
      fontWeight: "700",
      lineHeight: "1.5rem"
    },

    subtitle2: {
      fontSize: ".75rem",
      fontWeight: "600",
      lineHeight: "1.5rem"
    },
    caption: {
      fontSize: ".875rem",
      fontWeight: "600",
      lineHeight: "0.75rem"
    }
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
          margin: "24px 0",
          boxShadow: "unset",
          padding: "32px"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          height: "52px",
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "400",
          boxShadow: "unset",
          "&:has(>svg)": {
            padding: "8px",
            borderRadius: "50%",
            minWidth: "1em",
            minHeight: "1em"
          }
        }
      }
    },
    MuiBottomNavigation:{
      styleOverrides: {
        root: {
          borderRadius: "16px",
          marginBottom: "env(safe-area-inset-bottom)",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          "& fieldset": {
            borderColor: "#E0E0E2"
          },
          "&.Mui-error": {
            "& svg": {
              fill: "#FF6666"
            }
          }
        }
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: "#FF6666",
          "&$error": {
            color: "#FF6666"
          }
        }
      }
    },

    MuiTab: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true
      }
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave"
      }
    }
  }
});

export default theme;