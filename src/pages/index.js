//@flow
import React from "react";
import PostListing from "../components/PostListing";

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: { excerpt: string, frontmatter: $Shape<Frontmatter> }
      }>
    }
  }
};

class IndexPage extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges.map(r => r.node);

    return <PostListing posts={posts} />;
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
