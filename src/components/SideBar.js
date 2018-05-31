//@flow
import * as React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/core/styles/withStyles";
import { DRAWER_WIDTH, APPBAR_MIN_HEIGHT } from "../config";
import { AppStateConsumer } from "../containers/AppState";
import type { AppContext } from "../containers/AppState";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseButton from "./CloseButton";

type Props = {
  children: React.Node,
  classes: MUIClasses
};

const classes = withStyles(theme => ({
  paper: {
    overflowX: "hidden",
    paddingTop: APPBAR_MIN_HEIGHT,
    [theme.breakpoints.down("xs")]: {
      position: "fixed",
      height: "100vh",
      zIndex: 4000,
      width: "60%"
    },
    [theme.breakpoints.up("sm")]: {
      position: "fixed",
      height: "100vh",
      zIndex: 100,
      width: DRAWER_WIDTH
    }
  }
}));

/* Sidebar renders a swipable drawer on xs
 * and a fixed drawer on higher screen widths */
class SideBar extends React.Component<Props> {
  render() {
    const { children, classes } = this.props;

    return (
      <React.Fragment>
        <Hidden smUp>
          <AppStateConsumer>
            {({ state, handlers }: AppContext) => (
              <SwipeableDrawer
                open={state.drawerOpen}
                classes={classes}
                onOpen={handlers.openDrawer}
                onClose={handlers.closeDrawer}
                disableBackdropTransition={true}
              >
                <CloseButton />
                {children}
              </SwipeableDrawer>
            )}
          </AppStateConsumer>
        </Hidden>
        <Hidden xsDown>
          <Drawer variant="permanent" classes={classes}>
            {children}
          </Drawer>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default classes(SideBar);
