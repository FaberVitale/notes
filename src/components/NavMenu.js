//@flow
import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import Link from "gatsby-link";
import { Accordion, Collapsible } from "./Accordion";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  classes: MUIClasses,
  title: string,
  pathname: string, // pass it down just to force a re-render when path changes
  collapsibleIds: Array<string>,
  linksBySection: { [section: string]: Array<$Shape<Frontmatter>> }
};

const style = theme => ({
  active: {
    borderRight: `4px solid ${theme.palette.primary.main}`
  }
});

const LinkButton = withStyles(style)(({ children, classes, ...rest }) => (
  <ListItem activeClassName={classes.active} {...rest}>
    {children}
  </ListItem>
));

class NavMenu extends React.PureComponent<Props> {
  static createListItem = ({ path, title }: $Shape<Frontmatter>) => (
    <LinkButton button exact key={path} component={Link} to={path}>
      {title}
    </LinkButton>
  );

  renderProp = (activeIndex, handleClick) => {
    const { title, linksBySection, collapsibleIds } = this.props;

    const sections = Object.keys(linksBySection).sort();

    return (
      <React.Fragment>
        {NavMenu.createListItem({ title, path: "/" })}
        {sections.map((section, index) => (
          <Collapsible
            index={index}
            key={section}
            id={collapsibleIds[index]}
            label={section}
            open={activeIndex === index}
            onClick={handleClick}
          >
            {linksBySection[section].map(NavMenu.createListItem)}
          </Collapsible>
        ))}
      </React.Fragment>
    );
  };

  render() {
    return <Accordion render={this.renderProp} />;
  }
}

export default withStyles(style)(NavMenu);
