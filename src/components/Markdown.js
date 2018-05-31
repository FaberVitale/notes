import rehypeReact from "rehype-react";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import withStyles from "@material-ui/core/styles/withStyles";
import ExtLink from "./ExtLink";
import Link from "gatsby-link";
import { bindPropsFactory } from "../util/functions";

const bindProps = bindPropsFactory(React.createElement);

const Li = withStyles(theme => ({
  listItem: {
    color: theme.palette.text.primary,
    "ul > &::before": {
      content: '"●\u0020"',
      color: theme.palette.primary.main
    }
  }
}))(({ children, classes }) => (
  <li className={classes.listItem}>{children}</li>
));

const A = withStyles(theme => ({
  link: {
    color: theme.palette.primary.dark,
    textDecoration: "none",
    fontWeight: "bold",
    outline: "none",
    "&:visited": {
      color: theme.palette.primary.dark
    },
    "&:hover": {
      borderBottomWidth: 2,
      borderBottomColor: theme.palette.primary.dark,
      borderBottomStyle: "solid"
    },
    "&:focus": {
      border: "none", // render only outline in case of :focus:hover
      outlineWidth: 2,
      outlineStyle: "solid",
      outlineColor: theme.palette.primary.main
    }
  }
}))(({ classes, children, href, ...rest }) => {
  return React.createElement(
    href && (href[0] === "/" || href[0] === ".") ? Link : ExtLink,
    { className: classes.link, href, ...rest },
    children
  );
});

const Ol = ({ children }) => (
  <ol style={{ margin: "16px 0", listStylePosition: "inside" }}>{children}</ol>
);

const Ul = ({ children }) => (
  <ul style={{ listStyle: "none", margin: "16px 0" }}>{children}</ul>
);

const Th = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontWeight: "bold"
  }
}))(TableCell);

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: bindProps(Typography, { component: "p", paragraph: true }),
    h2: bindProps(Typography, {
      component: "h2",
      variant: "title",
      gutterBottom: true
    }),
    h3: bindProps(Typography, {
      component: "h3",
      variant: "subheading",
      gutterBottom: true
    }),
    table: bindProps(Table, {
      style: {
        tableLayout: "fixed", // <- if not set tables will overflow
        margin: "32px 0"
      }
    }),
    thead: TableHead,
    tbody: TableBody,
    tr: TableRow,
    td: TableCell,
    th: Th,
    ul: Ul,
    ol: Ol,
    li: Li,
    a: A
  }
}).Compiler;

export default ({ htmlAst }) => {
  return <div>{renderAst(htmlAst)}</div>;
};
