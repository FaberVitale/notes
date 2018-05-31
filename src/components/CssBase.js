//@flow
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {||};
/*inspired by Mui's CssBaseline (previously named Reboot):
 https://github.com/mui-org/material-ui/blob/v1-beta/src/CssBaseline/CssBaseline.js
 it adds touch action and changes marging and padding rules
 */
const styles = theme => ({
  "@global": {
    html: {
      // Antialiasing.
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      boxSizing: "border-box"
    },
    "*, *::before, *::after": {
      boxSizing: "inherit",
      margin: 0,
      padding: 0
    },
    body: {
      //removes double-tap to zoom, allows  pan or pinch to zoom
      touchAction: "manipulation",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      overflow: "auto",
      backgroundColor: theme.palette.background.paper,
      "@media print": {
        // Save printer ink.
        backgroundColor: theme.palette.common.white
      }
    },
    /* hide chrome and ie11 clear button */
    'input[type="search"]::-webkit-search-cancel-button': {
      "-webkit-appearance": "none"
    },
    'input[type="search"]::-ms-clear': {
      display: "none"
    },
    /* hide ugly dotted outline in FF */
    "::-moz-focus-inner": {
      border: 0
    }
  }
});

class CssBase extends React.Component<Props> {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return null;
  }
}

export default withStyles(styles)(CssBase);
