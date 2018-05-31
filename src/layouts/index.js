//@flow
import "../util/polyfills";
import "typeface-roboto";
import "prismjs/themes/prism.css";
import * as React from "react";
import AppBar from "../components/AppBar";
import SideBar from "../components/SideBar";
import MenuButton from "../components/MenuButton";
import Helmet from "react-helmet";
import withRoot from "../containers/withRoot";
import { AppStateProvider } from "../containers/AppState";
import withStyles from "@material-ui/core/styles/withStyles";
import { APPBAR_MIN_HEIGHT, DRAWER_WIDTH } from "../config";
import Hidden from "@material-ui/core/Hidden";
import ToolBarGroup from "../components/ToolBarGroup";
import Typography from "@material-ui/core/Typography";
import NavMenu from "../components/NavMenu";
import Link from "gatsby-link";

type Props = {
  children: () => React.Node,
  data: {
    allMarkdownRemark: {
      edges: Array<{ node: MarkdownRemark }>
    },
    site: {
      siteMetadata: {
        title: string
      }
    }
  },
  classes: MUIClasses
};

const classes = withStyles(theme => ({
  root: {
    display: "flex",
    zIndex: 1,
    backgroundColor: theme.palette.background.paper
  },
  heading: {
    alignSelf: "center"
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      margin: `${APPBAR_MIN_HEIGHT + 16}px auto 0 ${DRAWER_WIDTH}px`,
      width: `calc(100% - ${DRAWER_WIDTH}px)`
    },
    [theme.breakpoints.down("xs")]: {
      margin: `${APPBAR_MIN_HEIGHT + 16}px auto 0 auto`,
      width: "100%"
    },
    flex: 1,
    display: "flex",
    justifyContent: "center"
  }
}));

class Layout extends React.Component<Props> {
  render() {
    const { classes, children, data } = this.props;

    const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
      path: node.frontmatter.path,
      title: node.frontmatter.title
    }));

    return (
      <AppStateProvider>
        <div id="shell" className={classes.root}>
          <Helmet title={data.site.siteMetadata.title} />
          <AppBar>
            <ToolBarGroup>
              <Hidden smUp>
                <MenuButton />
              </Hidden>
              <Link to="/" className={classes.heading}>
                <Typography component="h1" variant="title">
                  {data.site.siteMetadata.title}
                </Typography>
              </Link>
            </ToolBarGroup>
          </AppBar>
          <SideBar>
            <NavMenu posts={posts} />
          </SideBar>
          <main className={classes.main}>{children()}</main>
        </div>
      </AppStateProvider>
    );
  }
}

export default withRoot(classes(Layout));

/* eslint-disable-next-line no-undef */
export const query = graphql`
  query SiteTitleQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
