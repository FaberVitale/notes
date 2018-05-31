//@flow
import { createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: blue[100],
      main: blue[600],
      dark: blue[900]
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  },
  typography: {
    fontSize: 16
  },
  breakpoints: {
    values: {
      /* ipad mini,  nexus 7 etc... will have the offscreen drawer  */
      sm: 769
    }
  }
});
