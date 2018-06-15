//@flow
import React, { Fragment } from "react";
import PostListing from "../components/PostListing";
import ArticleHeader from "../components/ArticleHeader";
import BreadCrumb from "../components/BreadCrumb";
import { createBreadcrumbLink } from "../components/BreadcrumbItem";
import Helmet from "react-helmet";
import { defaultDescription, defaultKeywords } from "../config";

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    },
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
    const title = data.site.siteMetadata.title;

    const links = [
      { path: "/", label: title },
      { path: `/p/${section}`, label: section }
    ];

    const header = (
      <ArticleHeader
        title={section}
        nav={<BreadCrumb links={links} createLink={createBreadcrumbLink} />}
      />
    );

    return (
      <Fragment>
        <Helmet>
          <meta name="description" content={defaultDescription} />
          <meta name="keywords" content={defaultKeywords} />
        </Helmet>
        <PostListing header={header} posts={posts} />
      </Fragment>
    );
  }
}

export default Section;

export const query = graphql`
  query postsBySection($section: String) {
    ...siteTitle
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
