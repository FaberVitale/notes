//@flow
import React from "react";
import { AppStateConsumer } from "../containers/AppState";
import type { AppContext } from "../containers/AppState";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/icons/Menu";

class MenuButton extends React.Component<{}> {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <AppStateConsumer>
        {({ state, handlers }: AppContext) => (
          <IconButton aria-label="toggle menu" onClick={handlers.openDrawer}>
            <Menu />
          </IconButton>
        )}
      </AppStateConsumer>
    );
  }
}

export default MenuButton;
