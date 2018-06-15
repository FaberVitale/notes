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
import { uniqueId } from "../util/functions";

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
  linksBySection: { [section: string]: Array<$Shape<Frontmatter>> };
  collapsibleIds: Array<string>;

  constructor(props: Props) {
    super(props);

    /* cache the links by section  */
    this.linksBySection = props.data.allMarkdownRemark.edges.reduce(
      (aggr, { node }) => {
        const { section, path, title } = node.frontmatter;

        if (!Object.prototype.hasOwnProperty.call(aggr, section)) {
          aggr[section] = [];
        }

        aggr[section].push({
          path,
          title
        });

        return aggr;
      },
      {}
    );

    this.collapsibleIds = Object.keys(this.linksBySection).map(
      uniqueId.bind(null, "panel")
    );
  }

  render() {
    const { classes, children, data } = this.props;

    const title = data.site.siteMetadata.title;

    return (
      <AppStateProvider>
        <div id="shell" className={classes.root}>
          <Helmet title={title} />
          <AppBar>
            <ToolBarGroup>
              <Hidden smUp implementation="css">
                <MenuButton />
              </Hidden>
              <Hidden xsDown implementation="css">
                <Link to="/" className={classes.heading}>
                  <Typography component="h1" variant="title">
                    {title}
                  </Typography>
                </Link>
              </Hidden>
            </ToolBarGroup>
          </AppBar>
          <SideBar>
            <NavMenu
              collapsibleIds={this.collapsibleIds}
              linksBySection={this.linksBySection}
              title={title}
            />
          </SideBar>
          <main className={classes.main}>{children()}</main>
        </div>
      </AppStateProvider>
    );
  }
}

export default withRoot(classes(Layout));

/* extract site title */
export const siteTitle = graphql`
  fragment siteTitle on RootQueryType {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export const query = graphql`
  query LayoutIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            section
          }
        }
      }
    }
    ...siteTitle
  }
`;
