//@flow
import * as React from "react";
import PostCard from "./PostCard";
import Article from "./Article";

type Props = {
  header?: React.Node,
  posts: Array<$Shape<MarkdownRemark>>
};

class PostListing extends React.Component<Props> {
  static renderPost = ({ excerpt, frontmatter }: MarkdownRemark) => {
    return (
      <PostCard
        key={frontmatter.path}
        title={frontmatter.title}
        section={frontmatter.section}
        link={frontmatter.path}
        excerpt={excerpt}
      />
    );
  };

  render() {
    const { posts, header } = this.props;

    return (
      <Article>
        {header}
        {posts.map(PostListing.renderPost)}
      </Article>
    );
  }
}

export default PostListing;
