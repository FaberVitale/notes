//@flow
import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import ToolBarGroup from "../components/ToolBarGroup";
import Typography from "@material-ui/core/Typography";
import { HEADER_BORDER_RADIUS } from "../config";

const style = theme => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    padding: 16,
    marginBottom: 32,
    color: theme.palette.primary.contrastText,
    borderRadius: HEADER_BORDER_RADIUS,
    overflow: "hidden"
  },
  navBar: {
    padding: 4,
    marginBottom: 32
  }
});

type Props = {
  classes: MUIClasses,
  title: string,
  nav: React.Node
};

class ArticleHeader extends React.Component<Props> {
  static defaultProps = {
    title: "Title"
  };

  render() {
    const { classes, title, ...rest } = this.props;

    return (
      <header className={classes.header} {...rest}>
        <ToolBarGroup right className={classes.navBar}>
          {this.props.nav}
        </ToolBarGroup>
        <Typography component="h2" color="inherit" variant="headline">
          {title}
        </Typography>
      </header>
    );
  }
}

export default withStyles(style)(ArticleHeader);
