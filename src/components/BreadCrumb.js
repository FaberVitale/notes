import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

type Link = {|
  path: string,
  label: string
|};

type Props = {
  createLink: (link: Link, index: number) => React.ElementType,
  links: Array<Link>,
  separator: React.Node
};

const style = {
  list: {
    display: "flex",
    alignItems: "center",
    listStyle: "none"
  },
  listItem: {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "flex-start"
  }
};

class Breadcrumb extends React.Component<Props> {
  static defaultProps = {
    createLink: (link, index, len) => (
      <a href={link.path} aria-current={index === len - 1 ? "page" : null}>
        {link.label}
      </a>
    ),
    links: [],
    separator: "/"
  };

  render() {
    const { createLink, links, classes, separator, ...rest } = this.props;

    let list = [];

    for (let i = 0, len = links.length; i < len; i++) {
      list.push(
        <li key={links[i].path} className={classes.listItem}>
          {i > 0 && <div aria-hidden={true}>{separator}</div>}
          {createLink(links[i], i, len)}
        </li>
      );
    }

    return (
      <nav {...rest} aria-label="Breadcrumb">
        <ul className={classes.list}>{list}</ul>
      </nav>
    );
  }
}

export default withStyles(style)(Breadcrumb);
