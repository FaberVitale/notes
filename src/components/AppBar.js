//@flow
import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { APPBAR_MIN_HEIGHT } from "../config";

type Props = {
  children: React.Node,
  className?: string,
  classes: MUIClasses
};

const classes = withStyles(theme => ({
  header: {
    display: "flex",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    padding: "0px 8px",
    justifyContent: "space-between",
    alignItems: "center",
    flexFlow: "row nowrap",
    /* patch ie11 bug with flexbox and minHeight, see issue#6 */
    height: APPBAR_MIN_HEIGHT - 5,
    minHeight: APPBAR_MIN_HEIGHT,
    border: 0,
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 4,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.primary.main,
    boxShadow: theme.shadows[1]
  }
}));

export default classes(({ children, classes, className, ...rest }: Props) => (
  <header
    className={className ? `${classes.header} ${className}` : classes.header}
    {...rest}
  >
    {children}
  </header>
));
