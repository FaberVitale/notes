//@flow
import * as React from "react";
import { uniqueId } from "../util/functions";
import withStyles from "@material-ui/core/styles/withStyles";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";

type CollapsibleProps = {
  classes: MUIClasses,
  open: boolean,
  onClick: (index: number) => void,
  index: number,
  label: string,
  children: React.Node
};

type AccordionProps = {
  component: string,
  render: (
    activeIndex: number,
    handleClick: (index: number) => void
  ) => React.Node
};

type AccordionState = {
  activeIndex: number
};

const styles = theme => ({
  header: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "transparent",
    border: "none",
    alignItems: "center",
    outline: "none",
    "&:hover": {
      backgroundColor: theme.palette.action.hover
    },
    "&:focus": {
      backgroundColor: theme.palette.action.selected
    }
  },
  expandLess: {
    transition: "transform 250ms",
    transform: "rotateX(-180deg)"
  },
  expandMore: {
    transition: "transform 250ms",
    transform: "rotateX(0deg)"
  },
  hidden: {
    display: "none"
  },
  visible: {
    display: "block"
  }
});

const BaseCollapsible = class Collapsible extends React.Component<
  CollapsibleProps
> {
  handleButtonClick = () => {
    const { index, onClick } = this.props;
    onClick(index);
  };

  static style = {};

  panelId = uniqueId("panel");

  render() {
    const { onClick, open, label, classes, children, ...rest } = this.props;

    return (
      <div {...rest}>
        <Typography
          component="button"
          variant="subheading"
          className={classes.header}
          aria-controls={this.panelId}
          aria-expanded={open}
          onClick={this.handleButtonClick}
        >
          <span>{label}</span>
          <span
            className={open ? classes.expandLess : classes.expandMore}
            aria-hidden={true}
          >
            <ExpandMore />
          </span>
        </Typography>
        <div
          id={this.panelId}
          className={open ? classes.visible : classes.hidden}
        >
          {children}
        </div>
      </div>
    );
  }
};

export const Collapsible = withStyles(styles)(BaseCollapsible);

export const Accordion = class Accordion extends React.PureComponent<
  AccordionProps,
  AccordionState
> {
  static defaultProps = {
    component: "nav"
  };

  state = {
    activeIndex: -1
  };

  handleClick = (index: number) => {
    this.setState(({ activeIndex }: AccordionState) => ({
      activeIndex: activeIndex === index ? -1 : index
    }));
  };

  render() {
    const { component, render, ...rest } = this.props;

    return React.createElement(
      component,
      rest,
      render(this.state.activeIndex, this.handleClick)
    );
  }
};
