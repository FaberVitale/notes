//@flow
import React, { Fragment } from "react";
import PostListing from "../components/PostListing";
import Helmet from "react-helmet";
import { defaultDescription, defaultKeywords } from "../config";

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: { excerpt: string, frontmatter: $Shape<Frontmatter> }
      }>
    }
  }
};

const headerStyle = {
  marginBottom: 32
};

class IndexPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges.map(r => r.node);

    return (
      <Fragment>
        <Helmet>
          <meta name="description" content={defaultDescription} />
          <meta name="keywords" content={defaultKeywords} />
        </Helmet>
        <PostListing
          header={
            <header style={headerStyle}>
              <h2>Index</h2>
            </header>
          }
          posts={posts}
        />
      </Fragment>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 180)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`;
