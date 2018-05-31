//@flow
import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { navigateTo } from "gatsby-link";
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
    width: "100%",
    minWidth: 300,
    height: 160,
    padding: 16,
    position: "relative",
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
  handleClick = () => {
    /* see: https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js#L40
     * only the primary button triggers a click
     */
    navigateTo(this.props.link, { landing: false });
  };
  /* a11y role link */
  hadleKeyDown = ({ key }) => {
    if (key === "Enter" || key === "\u0020") {
      navigateTo(this.props.link, { landing: false });
    }
  };

  render() {
    const { title, excerpt, classes } = this.props;
    return (
      <Card
        role="link"
        className={classes.card}
        component="section"
        tabIndex={0}
        onKeyDown={this.hadleKeyDown}
        onClick={this.handleClick}
      >
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
