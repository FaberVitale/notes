//@flow
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "gatsby-link";

type Props = {
  posts: Array<$Shape<Frontmatter>>
};

class NavMenu extends React.Component<Props> {
  static createListItem = ({ path, title }: $Shape<Frontmatter>) => (
    <ListItem button key={path} component={Link} to={path}>
      {title}
    </ListItem>
  );

  render() {
    const { posts } = this.props;

    return (
      <List component="nav">
        {
          <ListItem button component={Link} to={"/"}>
            {"Index"}
          </ListItem>
        }
        {posts.map(NavMenu.createListItem)}
      </List>
    );
  }
}

export default NavMenu;
