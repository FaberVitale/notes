//@flow
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "gatsby-link";

type Props = {
  links: Array<$Shape<Frontmatter>>
};

class NavMenu extends React.Component<Props> {
  static createListItem = ({ path, title }: $Shape<Frontmatter>) => (
    <ListItem button key={path} component={Link} to={path}>
      {title}
    </ListItem>
  );

  render() {
    const { links } = this.props;

    return <List component="nav">{links.map(NavMenu.createListItem)}</List>;
  }
}

export default NavMenu;
