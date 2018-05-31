declare type Post = {
  id: string,
  exerpt: string
};

declare type Frontmatter = {
  path: string,
  section: string,
  date: string,
  title: string,
  slug: string
};

declare type WordCount = {
  paragraphs: number,
  sentences: number,
  words: number
};

/* doesn't contain all the props add more if needed */
declare type MarkdownRemark = {
  frontmatter: $Shape<Frontmatter>,
  excerpt: string,
  html: string,
  htmlAst: Object,
  fileAbsolutePath: string,
  timeToRead: number,
  tableOfContents: string,
  wordCount: $Shape<WordCount>
};

declare var graphql: Function;
