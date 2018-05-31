//@flow
import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const style = theme => ({
  article: {
    maxWidth: 720,
    width: "92%",
    overflowWrap: "break-word",
    paddingBottom: 16
  }
});

type Props = {
  classes: MUIClasses,
  children: React.Node
};

class Article extends React.Component<Props> {
  render() {
    const { classes, children } = this.props;

    return <article className={classes.article}>{children}</article>;
  }
}

export default withStyles(style)(Article);
