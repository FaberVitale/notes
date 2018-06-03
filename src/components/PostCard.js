//@flow
import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Link from "gatsby-link";
import withStyles from "@material-ui/core/styles/withStyles";
import OverflowFade from "./OverflowFade";

type Props = {
  title: string,
  excerpt: string,
  link: string,
  classes: MUIClasses
};

const style = theme => ({
  card: {
    display: "block",
    width: "100%",
    minWidth: 300,
    height: 160,
    padding: 16,
    position: "relative",
    textDecoration: "none",
    marginBottom: 32,
    boxShadow: theme.shadows[1],
    outline: "none",
    "&:focus": {
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: theme.palette.primary.main
    }
  },
  paragraph: {
    width: "100%",
    overflow: "hidden"
  }
});

class PostCard extends React.Component<Props> {
  render() {
    const { title, excerpt, classes, link } = this.props;
    return (
      <Card className={classes.card} component={Link} to={link}>
        <Typography component="h3" variant="title" gutterBottom>
          {title}
        </Typography>
        <Typography component="p" className={classes.paragraph}>
          {excerpt}
        </Typography>
        <OverflowFade />
      </Card>
    );
  }
}

export default withStyles(style)(PostCard);
