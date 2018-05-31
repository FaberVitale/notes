//@flow
import * as React from "react";
import { noop } from "../util/functions";

export type AppState = {
  drawerOpen: boolean
};

export type Handlers = {
  toggleDrawer: () => void,
  closeDrawer: () => void,
  openDrawer: () => void,
  updateState: (newState: $Shape<AppState>) => void
};

/* avoid name conflict with React Context */
export type AppContext = {
  state: AppState,
  handlers: Handlers
};

type Props = {
  children: React.Node
};

type State = {
  context: AppContext
};

const { Provider, Consumer } = React.createContext({
  state: { drawerOpen: false },
  handlers: {
    updateState: noop,
    toggleDrawer: noop,
    closeDrawer: noop,
    openDrawer: noop
  }
});

export const AppStateConsumer = Consumer;

export class AppStateProvider extends React.Component<Props, State> {
  updateState = (newState: $Shape<AppState>) => {
    let res = { ...this.state.context.state, ...newState };

    this.setState({ context: { state: res, handlers: this.handlers } });
  };

  toggleDrawer = () => {
    this.updateState({ drawerOpen: !this.state.context.state.drawerOpen });
  };

  closeDrawer = () => {
    this.updateState({ drawerOpen: false });
  };

  openDrawer = () => {
    this.updateState({ drawerOpen: true });
  };

  handlers = {
    updateState: this.updateState,
    toggleDrawer: this.toggleDrawer,
    openDrawer: this.openDrawer,
    closeDrawer: this.closeDrawer
  };

  state = {
    context: {
      state: { drawerOpen: false },
      handlers: this.handlers
    }
  };

  render() {
    return (
      <Provider value={this.state.context}>{this.props.children}</Provider>
    );
  }
}
