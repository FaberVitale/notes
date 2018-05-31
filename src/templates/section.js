//@flow
import React from "react";
import PostListing from "../components/PostListing";
import ArticleHeader from "../components/ArticleHeader";
import BreadCrumb from "../components/BreadCrumb";
import { createBreadcrumbLink } from "../components/BreadcrumbItem";

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Array<{ node: MarkdownRemark }>
    }
  }
};

class Section extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges.map(r => r.node);
    const section = posts[0].frontmatter.section;

    const links = [
      { path: "/", label: "Home" },
      { path: `/p/${section}`, label: section }
    ];

    const header = (
      <ArticleHeader
        title={section}
        nav={<BreadCrumb links={links} createLink={createBreadcrumbLink} />}
      />
    );

    return <PostListing header={header} posts={posts} />;
  }
}

export default Section;

export const query = graphql`
  query postsBySection($section: String) {
    allMarkdownRemark(filter: { frontmatter: { section: { eq: $section } } }) {
      edges {
        node {
          excerpt(pruneLength: 180)
          frontmatter {
            path
            title
            section
          }
        }
      }
    }
  }
`;
