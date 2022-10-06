import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#256D85",
  secondary: "#DFF6FF"
};

const theme = createTheme({
  palette: {
    primary: {
        main: colors.primary
    },
    secondary: {
        main: colors.secondary
    }
  },
  typography: {
    fontFamily: "Ubuntu",
    body1: {
        fontFamily: "Ubuntu"
    },
    body2: {
        fontFamily: "Montserrat"
    }
  }
});

export default theme;