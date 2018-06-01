//@flow
import React from "react";
import MarkDown from "../components/Markdown";
import Article from "../components/Article";
import ArticleHeader from "../components/ArticleHeader";
import BreadCrumb from "../components/BreadCrumb";
import { createBreadcrumbLink } from "../components/BreadcrumbItem";
import Helmet from "react-helmet";
import { defaultDescription, defaultKeywords } from "../config";
import { cleanWhiteSpace } from "../util/functions";

type Props = {
  data: {
    markdownRemark: MarkdownRemark
  }
};

class Post extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    let description =
      props.data &&
      props.data.markdownRemark &&
      props.data.markdownRemark.excerpt
        ? props.data.markdownRemark.excerpt
        : defaultDescription;

    this.state = {
      description: cleanWhiteSpace(description)
    };
  }

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
        <Helmet>
          <meta name="description" content={this.state.description} />
          <meta name="keywords" content={defaultKeywords} />
        </Helmet>
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
      excerpt(pruneLength: 150)
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
