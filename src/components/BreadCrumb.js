import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

type Link = {|
  path: string,
  label: string
|};

type Props = {
  createLink: (link: Link, index: number) => React.ElementType,
  links: Array<Link>
};

const style = {
  list: {
    display: "flex",
    alignItems: "center",
    listStyle: "none"
  },
  listItem: {
    "&+&::before": {
      color: "inherit",
      padding: 4,
      fontWeight: "bold",
      content: '"/"'
    }
  }
};

class Breadcrumb extends React.Component<Props> {
  static defaultProps = {
    createLink: (link, index, len) => (
      <a href={link.path} aria-current={index === len - 1 ? "page" : null}>
        {link.label}
      </a>
    ),
    links: []
  };

  render() {
    const { createLink, links, classes, ...rest } = this.props;

    let list = [];

    for (let i = 0, len = links.length; i < len; i++) {
      list.push(
        <li key={links[i].path} className={classes.listItem}>
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
