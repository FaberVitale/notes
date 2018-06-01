//@flow
import React from "react";
import MarkDown from "../components/Markdown";
import Article from "../components/Article";
import ArticleHeader from "../components/ArticleHeader";
import BreadCrumb from "../components/BreadCrumb";
import { createBreadcrumbLink } from "../components/BreadcrumbItem";

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

class Post extends React.Component<Props> {
  render() {
    const { data } = this.props;
    const { markdownRemark } = data; // data.markdownRemark holds our post data
    const { frontmatter, htmlAst } = markdownRemark;

    const sectionPath = `/p/${frontmatter.section}`;

    const links = [
      { path: "/", label: "Home" },
      { path: sectionPath, label: frontmatter.section },
      {
        path: frontmatter.path,
        label: frontmatter.slug
      }
    ];

    return (
      <Article>
        <ArticleHeader
          title={frontmatter.title}
          nav={<BreadCrumb links={links} createLink={createBreadcrumbLink} />}
        />
        <MarkDown htmlAst={htmlAst} />
        <footer>
          <time>{frontmatter.date}</time>
        </footer>
      </Article>
    );
  }
}

export default Post;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        section
        slug
      }
    }
  }
`;
