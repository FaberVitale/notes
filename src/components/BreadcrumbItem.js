import * as React from "react";
import Link from "gatsby-link";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  classes: MUIClasses,
  to: string,
  current: boolean,
  label?: string,
  children?: React.Node
};

const style = theme => ({
  link: {
    cursor: "pointer",
    fontSize: "0.8em",
    color: "inherit",
    fontWeight: "bold",
    outline: "none",
    borderRadius: 16,
    textDecoration: "none",
    padding: "4px 8px",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.primary.dark
    },
    "&:focus": {
      color: "inherit",
      backgroundColor: theme.palette.primary.dark
    }
  }
});

class ChipLink extends React.Component<Props> {
  // do not add the same entry on the history stack
  handleClick = (evt: SyntheticMouseEvent<*>) => {
    if (this.props.current) {
      evt.preventDefault();
    }
  };

  render() {
    const { classes, to, label, children, current, ...rest } = this.props;

    return (
      <Link
        className={classes.link}
        onClick={this.handleClick}
        to={to}
        {...rest}
      >
        {label || children || "link"}
      </Link>
    );
  }
}

const Chip = withStyles(style)(ChipLink);

export default Chip;

export const createBreadcrumbLink = (link, index, len) => {
  const isLast = len - 1 === index;

  return (
    <Chip
      to={link.path}
      label={link.label}
      current={isLast}
      aria-current={isLast ? "page" : null}
    />
  );
};
