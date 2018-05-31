//@flow
import React from "react";
import { AppStateConsumer } from "../containers/AppState";
import type { AppContext } from "../containers/AppState";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";

type Props = {};

class CloseButton extends React.Component<Props> {
  static style = {
    position: "absolute",
    top: 4,
    right: 4
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <AppStateConsumer>
        {({ state, handlers }: AppContext) => (
          <IconButton
            style={CloseButton.style}
            aria-label="close menu"
            onClick={handlers.closeDrawer}
          >
            <Close />
          </IconButton>
        )}
      </AppStateConsumer>
    );
  }
}

export default CloseButton;
